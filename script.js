'use strict'
const blogs = [
  'te-houtaewa-template',
  'html-css',
  'identity-values',
  'learning-plan',
]

const currentBlog = window.location.href
const blogIndex = blogs.indexOf(
  currentBlog.substring(
    currentBlog.lastIndexOf('/') + 1,
    currentBlog.lastIndexOf('.')
  )
)

const nextBlog = function () {
  if (blogs[blogIndex + 1] !== undefined) {
    document.querySelector('#next').href = `${blogs[blogIndex + 1]}.html`
  } else {
    document.querySelector('#nextBtn').classList.add('disabledButton')
  }
}
nextBlog()

const prevBlog = function () {
  if (blogIndex !== 0) {
    document.querySelector('#previous').href = `${blogs[blogIndex - 1]}.html`
  } else {
    document.querySelector('#prevBtn').classList.add('disabledButton')
  }
}
prevBlog()
