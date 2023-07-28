/*
 * @Author: Monologue
 * @Date: 2023-03-08 14:25:49
 * @LastEditTime: 2023-07-31 14:50:23
 * @LastEditors: Monologue
 * @Description: routes
 */

import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const MainPage = lazy(() => import('@/pages/Main'))
const AboutPage = lazy(() => import('@/pages/About'))
const ErrorPage = lazy(() => import('@/pages/ErrorPage'))
const FilePage = lazy(() => import('@/pages/File'))

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/file" element={<FilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
