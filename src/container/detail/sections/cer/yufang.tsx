import React from 'react';
// @ts-ignore
import YUFANG2 from '../../../certificate/images/yufang2.png'
// @ts-ignore
import YUFANG from '../../../certificate/images/yufang.png'
// @ts-ignore
import YUFANG3 from '../../../certificate/images/yufang3.png'
// @ts-ignore
import CONCART from '../../images/concart.png'
const Yufang = () => {
    return <div className='de-container'>
          <div className='detail-box'>
              <div className='title'>
                中医预防保健调理技术证书
              </div>
              <div className='time-box'>
                  <div className='detail'>2023-6-25</div>
                  <div className='detail'>105 人查看</div>
              </div>
                <div className='detail has-strong'>培训证书：</div>
                <div className='detail'>中医预防保健调理技术</div>
                <div className='detail has-strong'>发证单位：</div>
                <div className='detail'>国家卫生健康委人才交流服务中心 & 中国民间中医医药研究开发协会</div>
                <div className='detail has-strong'>证书样式：</div>
                <img src={YUFANG2} className='cer-img'/>
                <img src={YUFANG} className='cer-img'/>
                <div className='detail'></div>
                <div className='detail has-strong'>考试安排：</div>
                <div className='detail'>一个季度一次，具体以官网为准</div>
                <div className='detail has-strong'>项目介绍：</div>
                <img src={YUFANG3} className='cer-img'/>
                <div className='detail has-strong'>学习内容：</div>
                <div className='detail'>具体包括按摩、艾灸、刮痧、拔罐、砭术、食疗养生、中医传统运动、穴位贴敷、熏洗等养生保健技术方法。</div>
                <div className='detail has-strong'>课程列表</div>
                <div className='detail'>绪论-阴阳-五行-藏象-气血津液-病因-治则-经络腧穴-诊断学基础-望-闻-问-脉-按-八纲</div>
                <div className='detail has-strong'>学习形式：</div>
                <div className='detail'>直播课+录播课</div>
                <div className='detail has-strong'>更多咨询请联系我们：</div>
                <img src={CONCART} className='cer-img'/>

          </div>
      </div>
}

export default Yufang;