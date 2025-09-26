'use strict'
import { blogs } from './blogs.js'

const currentBlog = window.location.href
const blogIndex = blogs.findIndex((e) => {
  return (
    e.link ===
    currentBlog.substring(
      currentBlog.lastIndexOf('/') + 1,
      currentBlog.lastIndexOf('.')
    )
  )
})

const nextBlog = function () {
  if (blogIndex !== 0) {
    document.querySelector('#next').href = `${blogs[blogIndex - 1].link}.html`
  } else {
    document.querySelector('#nextBtn').classList.add('disabledButton')
  }
}
nextBlog()

const prevBlog = function () {
  if (blogs[blogIndex + 1] !== undefined) {
    document.querySelector('#previous').href = `${
      blogs[blogIndex + 1].link
    }.html`
  } else {
    document.querySelector('#prevBtn').classList.add('disabledButton')
  }
}
prevBlog()
