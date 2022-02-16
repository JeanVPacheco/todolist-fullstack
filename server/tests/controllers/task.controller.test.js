const sinon = require('sinon');
const { expect } = require('chai');

const taskService = require('../../services/task.service');
const taskController = require('../../controller/task.controller');

describe('TaskController - createTask', () => {
  describe('When the insertion in unsuccessful', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
      sinon.stub(taskService, 'createTask')
        .resolves(false);
    });

    after(() => {
      taskService.createTask.restore();
    });

    it('checks if the status is 400', async () => {
      await taskController.createTask(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });
  });

  describe('When the insertion is succesful', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Test task',
        description: 'Test description',
        status: 'Test status',
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
      sinon.stub(taskService, 'createTask')
        .resolves(true);
    });

    after(() => {
      taskService.createTask.restore();
    });

    it('checks if the status is 201', async () => {
      await taskController.createTask(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('expects the response to have the task id', async () => {
      await taskController.createTask(request, response);
      expect(response.json).to.have.a.property('tasks');
    });
  });
});
