import React, { useEffect, useState, useContext, useCallback } from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import Controls from './Controls';
import { VdnAppContext } from 'components/VdnApp';

const Notes = ({ classes }) => {
  const [notes, setNotes] = useState([]);
  const {
    urlVideo,
    db: { getNoteList }
  } = useContext(VdnAppContext);
  const getNoteListMemo = useCallback(async () => {
    try {
      let updateNotes = await getNoteList(urlVideo);
      setNotes(updateNotes);
    } catch (e) {
      console.log(e);
    }
  }, [urlVideo, setNotes, getNoteList]);

  useEffect(() => {
    getNoteListMemo();
  }, [getNoteListMemo]);

  return (
    <div className={classes.root}>
      <Controls />
      <AddNoteForm />
      <NoteList notes={notes} />
    </div>
  );
};

Notes.propTypes = {};

Notes.defaultProps = {};

export default withStyles(styles)(Notes);
