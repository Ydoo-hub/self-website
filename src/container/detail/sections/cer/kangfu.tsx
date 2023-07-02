import React from 'react';
// @ts-ignore
import KANGFU2 from '../../../certificate/images/kangfu2.png'
// @ts-ignore
import KANGFU3 from '../../../certificate/images/kangfu3.png'
// @ts-ignore
import CONCART from '../../images/concart.png'
const Kangfu = () => {
    return <div className='de-container'>
          <div className='detail-box'>
              <div className='title'>
              中医康复理疗证书详情
              </div>
              <div className='time-box'>
                  <div className='detail'>2023-6-25</div>
                  <div className='detail'>258 人查看</div>
              </div>
                <div className='detail has-strong'>培训证书：</div>
                <div className='detail'>中医康复理疗</div>
                <div className='detail has-strong'>发证单位：</div>
                <div className='detail'>中国中医药研究促进会</div>
                <div className='detail has-strong'>证书样式：</div>
                <img src={KANGFU2} className='cer-img'/>
                <img src={KANGFU3} className='cer-img'/>
                <div className='detail'></div>
                <div className='detail has-strong'>考试安排：</div>
                <div className='detail'>每月组织一次考试。综合考试采取百分制，总分60分以上合格。</div>
                <div className='detail has-strong'>适应人群：</div>
                <div className='detail'>医疗机构康复科医务人员、社会中医养生保健机构、从事中医康复理疗服务事业等</div>
                <div className='detail has-strong'>推荐报考原因：</div>
                <div className='detail'>中医康复理疗是根据传统医学理论，运用灸疗刮痧、推拿点穴、拔罐热疗、火疗、耳穴诊治、反射疗法、心理疗法、饮食疗法等防治疾病，简单易行、无痛苦、无毒副作用、疗效显著，是亚健康状态防治的重要手段。</div>
                <div className='detail'>中医康复理疗师目前在国内缺口非常大，从事的主要工作包括：康复理疗和康复理疗技术，就业可以面向康复医院、各级康复理疗机构、理疗会所、养生保健、健康调理、医院诊所、疗养院、儿童福利院等等从事康复治疗、康复护理和康复保健等工作。目前，全国一线城市的熟练的中医康复理疗师月薪可达万元以上，二三线城市也可以轻松达到6000元以上，就业前景好。</div>
                <div className='detail has-strong'>学员要求：</div>
                <div className='detail'>年满18周岁，满足下列要求</div>
                <div className='detail'>（1）从事或准备从事健康服务与管理相关职业的人员;</div>
                <div className='detail'>（2）各级医疗机构:包括医院医护人员;疾病预防控制中心专业人员;社区卫生服务人员，体检中心人员;</div>
                <div className='detail'>（3）各类非医疗机构:包括健康管理(咨询)公司、保险公司工作人员各单位人事部门负责健康管理人员;大中小学校校医;各制药公司、保健品公司相关人员;</div>
                <div className='detail'>（4）医学院校应届、往届毕业生。</div>
                <div className='detail has-strong'>更多咨询请联系我们：</div>
                <img src={CONCART} className='cer-img'/>

          </div>
      </div>
}

export default Kangfu;