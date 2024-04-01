
"use client"

import { Google, Facebook } from '@/components/integration/website'
import { getIntegraton } from '@/services'
import { useEffect, useState } from 'react'
const Integration = () => {
  const [interationData, setInterationData] = useState([])
  const [refetch, setRefetch] = useState(false)
  useEffect(() => {
    getIntegraton({ sorce: "" }).then((res) => {
      console.log(res)
      setInterationData(res?.data?.data)
    })
  }, [refetch])
  const googleData = interationData?.find(item => item.source === 'google');
  //   const googleData = interationData.find(item => item.source === 'google');
  //   console.log(googleData)
  // const trustpilotData = socialData.filter(item => item.source === 'trustpilot');
  // setGoogleData(googleData)
  // },[])
  // const googleData = socialData.find(item => item.source === 'google');
  // const trustpilotData = socialData.filter(item => item.source === 'trustpilot');
  return (
    <div>
      {/* https://www.google.com/maps?cid=8207431221043153787 */}
      <main className="main-content">
        <div className="container-fluid">
          <div className="mb-3">
            <h2 className="page-title my-3">
              Integrations
            </h2>
            <div className="col-12 col-lg-8 px-0">
              <p className="secondary-color">
                Integrate the platforms where you receive or want to receive reviews. Connect with Google and Facebook
                directly via the login, so you can reply to reviews from the Public reviews section. For the other
                platforms, simply enter your page link to import reviews. We don’t import all the reviews but the most
                recent ones.
              </p>
            </div>
            <div className="col-12 col-lg-4 px-0 mb-3">
              <div className="input-group border bg-white">
                <input type="text" className="form-control border-0" placeholder="Search" />
                <span className="input-group-text border-0 bg-transparent">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <Google googleData={googleData} setRefetch={setRefetch} refetch={refetch} />
            <Facebook />
          </div>
        </div>
      </main>

    </div>

  )
}
export default Integration