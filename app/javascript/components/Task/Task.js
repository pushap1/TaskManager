import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './useStyles';

const Task = ({ task, onOpenEditPopup, onDeleteTask }) => {
  const styles = useStyles();

  const handleEdit = () => onOpenEditPopup(task);
  const handleDelete = () =>
    onDeleteTask(task).catch((error) => {
      alert(`Destrucion Failed! Error: ${error.message}`);
    });

  const action = (
    <CardActions>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      <IconButton onClick={handleEdit}>
        <EditIcon />
      </IconButton>
    </CardActions>
  );

  return (
    <Card className={styles.root}>
      <CardHeader action={action} title={task.name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {task.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

Task.propTypes = {
  task: PropTypes.shape().isRequired,
  onOpenEditPopup: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default Task;
