import React from 'react';
// @ts-ignore
import XINLI2 from '../../../certificate/images/xinli2.png'
// @ts-ignore
import XINLI from '../../../certificate/images/xinli.png'

// @ts-ignore
import CONCART from '../../images/concart.png'

const Xinli = () => {
    return <div className='de-container'>
          <div className='detail-box'>
              <div className='title'>
                心理咨询师证书
              </div>
              <div className='time-box'>
                  <div className='detail'>2023-6-25</div>
                  <div className='detail'>212 人查看</div>
              </div>
                <div className='detail has-strong'>培训证书：</div>
                <div className='detail'>心理咨询师</div>
                <div className='detail has-strong'>发证单位：</div>
                <div className='detail'>中国科学院心理研究所</div>
                <div className='detail has-strong'>证书样式：</div>
                <img src={XINLI2} className='cer-img'/>
                <img src={XINLI} className='cer-img'/>
                <div className='detail'></div>
                <div className='detail has-strong'>考试安排：</div>
                <div className='detail'>每年组织两期考试，分别为5月份和11月份，考试时间2.5小时。综合考试采取百分制，总分60分以上合格。</div>
                <div className='detail has-strong'>适应人群：</div>
                <div className='detail'>对心理咨询有浓厚兴趣的人群，心理咨询行业从业者等等</div>
                <div className='detail has-strong'>推荐报考原因：</div>
                <div className='detail'>证书是进入行业的敲门砖，为提升自身的专业水平。国家认证心理咨询师二级、三级证书，在2017年已经取消考试了，导致国内目前心理咨询行业处于混乱的市场状态，现阶段最权威的仍然是由中国科学院心理研究所组织的心理咨询师培训考核，该证书是作为参训人员经过心理咨询培训的合法合规证明。心理咨询现在是非准入行业，国家并没有明确具备什么样的资格才能从事心理咨询工作。因为行业的特殊性，要求从业者具备大量的实践和案例磨砺专业技能。所以如果想从事这个行业，要继续学习更全面的技能实操项目，考取证书是进入行业的敲门砖，然后试着在有督导陪伴的情况下，经过长时间的个人体验和个案积累，方可独立从事专业的心理咨询工作。</div>
                <div className='detail has-strong'>学员要求：</div>
                <div className='detail'>以下三点符合一点即可</div>
                <div className='detail'>（1）具有国家承认的大专以上学历；;</div>
                <div className='detail'>（2）具有心理学、医学、教育学中级以上职称。</div>
                <div className='detail'>（3）大专或本科毕业前一年的在校学生，具有学生证或可出具在校证明。</div>
                <div className='detail has-strong'>更多咨询请联系我们：</div>
                <img src={CONCART} className='cer-img'/>

          </div>
      </div>
}

export default Xinli;