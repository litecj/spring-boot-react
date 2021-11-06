import React from 'react';
import styled from 'styled-components'
const Footer = () => {
    return (
      <footer style={{paddingTop:'50px'}}>
        <HR/>
        <div class="ft_bottom re">
            <ul class="ft_bottom_address font16">
                <li><span class="bold">비트 803 </span> <span class="ft_inline-block">｜</span> 서울 강남구 강남대로94길 20, 삼오빌딩( 803 )<span class="ft_inline-block">｜</span> 사업자등록번호 : 000-00-00000</li>
                <li>(주)비트비트 강남이 대표대표 : 길동이 <span class="ft_inline-block">｜</span> 문의 : 00-1234-4321 <span class="ft_inline-block">｜</span> 팩스 : 01.1234.9876</li>
                <li>OOOO업 신고번호 : 제 강남-00000호 <span class="ft_inline-block">｜</span> 개인정보보호관리책임자 : 누구일까</li>

                {/* <li><span class="bold">비트캠프</span> <span class="ft_inline-block">｜</span> 서울 강남구 강남대로94길 20, 삼오빌딩(5층 ~ 9층)<span class="ft_inline-block">｜</span> 사업자등록번호 : 214-85-24928</li>
                <li>(주)비트컴퓨터 강남본원 대표이사 : 조현정 <span class="ft_inline-block">｜</span> 문의 : 02-3486-9600 <span class="ft_inline-block">｜</span> 팩스 : 02.6007.1298</li>
                <li>통신판매업 신고번호 : 제 서초-00098호 <span class="ft_inline-block">｜</span> 개인정보보호관리책임자 : 최종진</li> */}
            </ul>
            <div class="ft_logo ab">
                <img src={"https://www.bitcamp.co.kr/theme/basic/img/logo.png"}/>
            </div>
            <div class="ft_bottom_copy after font16">
                <div class="w50 f-l" style={{textAlign:'center'}}>
                    <a href="/content/privacy" style={{marginRight:'20px'}}>개인정보처리방침</a>
                    <a href="/content/provision" style={{marginRight:'20px'}}>이용약관</a>
                    <a href="/content/location_seocho" style={{marginRight:'20px'}}>찾아오시는길</a>
                </div>
                <div class="w50 f-l t-r" style={{textAlign:'center'}}>
                    Copyright (c) 비트 803    All rights reserved.
                </div>
            </div>
        </div>
      </footer>
    )
  }
  
  
const HR = styled.hr`
  border: 1px solid black;
  text-align: center;
`
  export default Footer