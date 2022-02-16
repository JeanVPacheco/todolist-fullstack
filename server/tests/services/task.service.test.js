const sinon = require('sinon');
const { expect } = require('chai');

const taskService = require('../../services/task.service');
const taskModel = require('../../models/task.model');

describe('TaskService - createTask', () => {
  before(() => {
    const ID_EXAMPLE = '604cb554311d68f491ba5781';
    sinon.stub(taskModel, 'createTask')
      .resolves({ insertedId: ID_EXAMPLE });
  });

  after(() => {
    taskModel.createTask.restore();
  });

  describe('When the insertion is succesfull', () => {
    const payloadTask = {
      title: 'Test task',
      description: 'Test description',
      status: 'Test status',
    };

    it('returns an object', async () => {
      const response = await taskService.createTask(payloadTask);
      expect(response).to.be.a('object');
    });

    it('expects the response to have the task id', async () => {
      const response = await taskService.createTask(payloadTask);
      expect(response).to.have.a.property('insertedId');
    });
  });
});
