import React from 'react';
import { Post } from '../../templates/blog';

const PostPreview = props => {
  const { entry, widgetFor } = props;
  return (
    <Post
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      content={widgetFor('body')}
      preview={true}
    />
  );
};

export default PostPreview;
