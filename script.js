'use strict'
const blogs = [
  'te-houtaewa-template',
  'html-css',
  'identity-values',
  'learning-plan',
]

const currentBlog = window.location.href
const blogTitle = currentBlog.substring(
  currentBlog.lastIndexOf('/') + 1,
  currentBlog.lastIndexOf('.')
)

const nextBlog = function () {
  document.querySelector('#next').href = `${
    blogs[blogs.indexOf(blogTitle) + 1]
  }.html`
}
nextBlog()

const prevBlog = function () {
  if (blogs.indexOf(blogTitle) !== 0) {
    document.querySelector('#previous').href = `${
      blogs[blogs.indexOf(blogTitle) - 1]
    }.html`
  } else {
    document.querySelector('#prevBtn').classList.add('disabledButton')
  }
}
prevBlog()
