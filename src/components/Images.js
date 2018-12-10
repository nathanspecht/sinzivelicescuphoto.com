import React from 'react'

export function Images({ images }) {
  return images.map(image => <img src={image} />)
}
