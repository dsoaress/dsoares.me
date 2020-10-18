import React from 'react'
import Post from '@components/post'

const BlogPost = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <Post
      body={widgetFor('body')}
      image={getAsset(data.image)}
      title={data.title}
    />
  )
}

export default BlogPost