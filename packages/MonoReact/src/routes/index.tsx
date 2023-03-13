/*
 * @Author: Monologue
 * @Date: 2023-03-08 14:25:49
 * @LastEditTime: 2023-05-16 15:45:45
 * @LastEditors: Monologue
 * @Description: routes
 */

import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const MainPage = lazy(() => import('@/pages/Main'))
const AboutPage = lazy(() => import('@/pages/About'))
const ErrorPage = lazy(() => import('@/pages/ErrorPage'))

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
