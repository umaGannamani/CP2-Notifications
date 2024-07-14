const Notification = props => {
  //  Write your code here.
  const {className, iconUrl, text} = props
  const containerClassName = `notification-container ${className}`
  return (
    <div className={containerClassName}>
      <img className='icon' src={iconUrl} />
      <p className='text'>{text}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='container'>
    <h1 className='heading'>Notifications</h1>
    <div className='card-container'>
      <Notification
        className='primary-bg-color'
        iconUrl='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        text='Information Message'
      />
      <Notification
        className='success-bg-color'
        iconUrl='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        text='Success Message'
      />
      <Notification
        className='warning-bg-color'
        iconUrl='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        text='Warning Message'
      />
      <Notification
        className='danger-bg-color'
        iconUrl='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        text='Error Message'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
