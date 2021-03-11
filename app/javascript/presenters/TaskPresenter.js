import PropTypes from 'prop-types';
import PropTypesPresenter from 'utils/PropTypesPresenter';

export default new PropTypesPresenter(
  {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  },
  {
    taskTitle(task) {
      return `Task # ${task.id} [${task.name}]`;
    },
  },
);
