/* eslint-disable no-unused-expressions */
const sinon = require('sinon');
const { expect } = require('chai');

const { MongoClient } = require('mongodb');
const { getConnection } = require('./mongoMockConnection');

const mongoConnection = require('../../db');
const taskModel = require('../../models/task.model');

describe('TaskModel - createTask', () => {
  let connectionMock;

  const payloadTask = {
    title: 'Test task',
    description: 'Test description',
    status: 'Test status',
  };

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    await connectionMock.db('todolist').collection('tasks').drop();
    MongoClient.connect.restore();
  });

  describe('Inserted with success', () => {
    it('returns an object', async () => {
      const response = await taskModel.createTask(payloadTask);
      expect(response).to.be.a('object');
    });

    it('expects the response to have the task id', async () => {
      const response = await taskModel.createTask(payloadTask);
      expect(response).to.have.a.property('insertedId');
    });

    it('expects to find a task with the title informed', async () => {
      await taskModel.createTask(payloadTask);
      const newTask = await connectionMock
        .db('todolist')
        .collection('tasks')
        .findOne({ title: payloadTask.title });
      expect(newTask).to.be.not.null;
    });
  });
});
