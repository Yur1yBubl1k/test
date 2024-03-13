import React, { useState } from 'react'
// import ASN1 from '@lapo/asn1js'
import './App.css'
import classnames from 'classnames'
// import certificatesFromServer from '././certificates.zip'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const App = () => {
  const [addClicked, setAddClicked] = useState(false)
  const [certificates, setCertificates] = useState([])
  const [selectedCertificate, setSelectedCertificate] = useState(false)

  // const result = ASN1.decode('certificates.zip')
  // if (result.typeName() !== 'SEQUENCE') {
  //   throw 'Неправильна структура конверта сертифіката (очікується SEQUENCE)'
  // }
  // // const tbsCertificate = result.sub[0]
  // console.log(result)

  return (
    <>
      <div className='container'>
        <div className='start_wrapper'>
          <div className='start_block'>
            <button
              onClick={() => {
                setAddClicked(!addClicked)
              }}
              className='button_add'
            >
              <p>{!addClicked ? 'Додати' : 'Назад'}</p>
            </button>

            {!addClicked && (
              <span className='start_text'>Нема жодного сертифікату</span>
            )}
          </div>

          <div className={classnames('users_block', { 'users_block--hidden': !addClicked })}>
            <ul className='user_list'>
              <li
                onClick={() => {
                  setSelectedCertificate(true)
                }}
                className={classnames('user_item', {
                  'user_item--is-active': selectedCertificate
                })}
              >
                Шевченко Анатолій Анатолійович
              </li>
            </ul>
          </div>
        </div>

        {addClicked && (
          <div className={classnames('choose_box', { test_class: selectedCertificate })}>
            {!selectedCertificate
              ? (
              <div className='choose_wrapper'>
                <span className='drop_file'>
                  Перетягніть файл сертифікату сюди <br /> або
                </span>
                <button onClick={() => {}} className='button_choose'>
                  Виберіть через стандартний діалог
                </button>
              </div>
                )
              : (
              <div className='settings_block'>
                <p className='setting'>
                  Common Name:  &nbsp;<span className='setting_text'>Шевченко Анатолій Анатолійович</span>
                </p>
                <p className='setting'>
                 Issuer CN: &nbsp;<span className='setting_text'>КНЕДП «Приватбанк»</span>
                </p>
                <p className='setting'>
                  Valid From: &nbsp;<span className='setting_text'>2023-11-13</span>
                </p>
                <p className='setting'>
                  Valid To: &nbsp;<span className='setting_text'>2024-11-13</span>
                </p>
              </div>
                )}
          </div>
        )}
      </div>
    </>
  )
}
