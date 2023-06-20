import React from 'react';
import './style.css'
import HeadNav from '../../sections/head-nav'
// @ts-ignore
import CERTIFICATE_PNG from '../../assets/image/certificate.jpg'
import BottomNav from "../../sections/bottom-nav";

const About = () => {
    return <>
    <div style={{
        position: 'absolute',
        left: 0,
        top: 0
    }}>
        <HeadNav chooseIndex={3}/>
    </div>
    <div className='about-container'>
   
        <div className='about-bg-container'></div>
            <div className='about-main'>
                <div className='title'>关于我们</div>

                <div className='com-title'>公司介绍</div>
                <div className='com-desc'>
                    办得了远程教育（佛山）有限公司，旨在为个人用户提供专业的技能证书报考指导。以持续性“线上学习+考试”为主线，引导各行业人才准确垂直进各自的行业领域，不断提高其专业性学识，从而使其更好地为社会提供专业性服务，另一方面，协助国家各单位提高证书的含金量，更致力于打造老百姓认可的教育培训指导服务平台。
                </div>

                <div className='com-title' style={{marginTop: 40}}>公司理念</div>
                <div className='com-desc' style={{marginBottom: 10}}>
                    <span style={{color: '#D5575f', fontWeight: 700}}>专业客观</span>：保持高度的专业水准，并对客户提供准确、客观、真实的认证报告。公司严格践行科学的考证标准巴拉，遵循行业规范，确保认证结果的可信度和权威性。
                </div>
                <div className='com-desc' style={{marginBottom: 10}}>
                    <span style={{color: '#D5575f', fontWeight: 700}}>诚信保密</span>：公司保持诚信，遵守保密协议，严格保护客户的隐私和商业机密，不泄露客户信息和考证结果。
                </div>
                <div className='com-desc' style={{marginBottom: 10}}>
                    <span style={{color: '#D5575f', fontWeight: 700}}>服务质量</span>：公司注重客户服务，提供及时、高效的服务，满足客户的需求和期望。同时，公司保持高质量的考证成果，不断提升专业学习的水平，提高考证的准确性和可靠性。
                </div>
                <div className='com-desc' style={{marginBottom: 10}}>
                    <span style={{color: '#D5575f', fontWeight: 700}}>创新发展</span>：考证领域需要不断探索和创新，公司注重科学方法和技术手段的创新，不断提升研究水平和技术能力，以提供更加准确、全面的考证成果。同时，公司注重自身的发展和成长，不断完善管理体系和流程，提高企业的竞争力和影响力。
                </div>
                <div className='com-desc' style={{marginBottom: 10}}>
                    <span style={{color: '#D5575f', fontWeight: 700}}>社会责任</span>：公司承担起社会责任，关注公众和社会对证书领域的需求和关注，积极参与公益活动，促进考证行业的发展和进步，为社会做出贡献。
                </div>
                
                <div className='contact-text'>
                    联系电话（张老师）：153 2340 5004
                </div>

                <div className='tip'>
                    办得了教育科技（佛山）有限公司
                </div>
            </div>
    </div>
    <BottomNav isFiexd={false}/>
    </>
}

export default About;