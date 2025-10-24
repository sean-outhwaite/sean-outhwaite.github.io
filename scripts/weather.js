import weatherCodes from '../data/weatherCodes.js'

async function getData() {
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=-36.8485&longitude=174.7635&daily=temperature_2m_min,precipitation_probability_max,temperature_2m_max,weather_code'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const result = await response.json()
    console.log(result)
    return result
  } catch (error) {
    console.error(error.message)
  }
}
const weather = await getData()

const dateFormatter = function (date) {
  const dateArr = date.split('-')
  //For some reason toDateString is returning one month ahead
  const formattedDate = new Date(
    Number(dateArr[0]),
    Number(dateArr[1]) - 1,
    Number(dateArr[2])
  )
  return formattedDate.toDateString()
}

function weatherCard() {
  // let link = location.appendChild(document.createElement('a'))
  let location = document.querySelector('.weather')
  let div = location.appendChild(document.createElement('div'))

  div.appendChild(document.createElement('h4')).textContent = dateFormatter(
    weather.daily.time[0]
  )

  div
    .appendChild(document.createElement('img'))
    .setAttribute('src', weatherCodes[weather.daily.weather_code[0]].day.image)

  div.appendChild(
    document.createElement('h5')
  ).textContent = `Max temp: ${weather.daily.temperature_2m_max[0]}`
  div.appendChild(
    document.createElement('p')
  ).textContent = `Chance of rain: ${weather.daily.precipitation_probability_max[0]}%`

  // link.setAttribute('href', `blog/${blog.link}.html`)
  // link.classList.add('blog-link')
  div.classList.add('flex-container-vertical', 'blog-preview')
}
weatherCard()
