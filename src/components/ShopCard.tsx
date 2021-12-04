import React from 'react'
import '../scss/ShopCard.scss'
import imgProduct1 from '../images/product1.jpg'
import imgProduct2 from '../images/product2.jpg'
import imgProduct3 from '../images/product3.jpg'
import imgProduct4 from '../images/product4.jpg'
import imgProduct5 from '../images/product5.jpg'
import imgProduct6 from '../images/product6.jpg'
import imgProduct7 from '../images/product7.jpg'

export default function ShopCard() {
  return (
    <div className="ShopCard">
      <div className="container">
        <div className="card-box">
          <div className="product-img">
            <img src={imgProduct1} alt="รองเท้าแตะ"/>
          </div>
          <div className="product-detail">
            <div className="product-detail-title">รองเท้าแตะมันยาง</div>
            <span className="price-c-line">$25</span>
            <span className="price-t-line">$59</span>
          </div>
        </div>
        <div className="card-box">
          <div className="product-img">
            <img src={imgProduct2} alt="กระเป่า"/>
          </div>
          <div className="product-detail">
            <div className="product-detail-title">กระเป่า แบนดัง แบนใหญ่ แบนทิ้งไปเลยยยยยยยยยยย!!!! </div>
            <span className="price-c-line">$25</span>
            <span className="price-t-line">$59</span>
          </div>
        </div>
        <div className="card-box">
          <div className="product-img">
            <img src={imgProduct3} alt="กล้องยี้ห้อใบตอง"/>
          </div>
          <div className="product-detail">
            <div className="product-detail-title">กล้องยี้ห้อใบตอง</div>
            <span className="price-c-line">$2,529</span>
            <span className="price-t-line">$1,899</span>
          </div>
        </div>
        <div className="card-box">
          <div className="product-img">
            <img src={imgProduct4} alt="รองเท้าแตะ"/>
          </div>
          <div className="product-detail">
            <div className="product-detail-title">AsiaPhone 19 Liminted Edition 2023 ร้อนแรงแซงทางโค้ง</div>
            <span className="price-c-line">$29,890</span>
            <span className="price-t-line">$15,959</span>
          </div>
        </div>
        <div className="card-box">
          <div className="product-img">
            <img src={imgProduct5} alt="เสื้อชินจังโง่ๆ"/>
          </div>
          <div className="product-detail">
            <div className="product-detail-title">เสื้อชินจังโง่ๆ</div>
            <span className="price-t-line">$59</span>
          </div>
        </div>
        <div className="card-box">
          <div className="product-img">
            <img src={imgProduct6} alt="กางเกงขาใหญ่"/>
          </div>
          <div className="product-detail">
            <div className="product-detail-title">กางเกงขาใหญ่ใส่แล้วดูขาใหญ่ (ใส่แล้วน่ารักดี)</div>
            <span className="price-c-line">$369</span>
            <span className="price-t-line">$299</span>
          </div>
        </div>
        <div className="card-box">
          <div className="product-img">
            <img src={imgProduct7} alt="พัดลมซิตาฮา"/>
          </div>
          <div className="product-detail">
            <div className="product-detail-title">พัดลมซิตาฮา Shitaha fan</div>
            <span className="price-c-line">$800</span>
            <span className="price-t-line">$599</span>
          </div>
        </div>
      </div>
    </div>
  )
}
