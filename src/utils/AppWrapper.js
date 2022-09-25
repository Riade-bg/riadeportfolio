import React from 'react'

const AppWrapper = (Component, classNames, idn) => function HOC(){
  return (
    <div
      id={idn}
        className={classNames}
    >
        <Component />
    </div>
  )
}

export default AppWrapper