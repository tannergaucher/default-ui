import '../package/index.css'

export default {
  title: 'Summary Details',
}

export const Primary = () => {
  const summary = document.createElement('summary')
  summary.innerText = 'Summary'

  const details = document.createElement('details')
  details.appendChild(summary)

  const p = document.createElement('p')

  p.innerText =
    'Details go here. You can put anything here you want. Click the summary to close.'

  details.appendChild(p)

  return details
}
