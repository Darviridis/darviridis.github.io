import React from 'react'

import projectStyles from '.style.module.css'
import styles from './landing-page.module.css'

const LandingPage = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['landing-page']}>
        <div className={styles['home']}>
          <div className={styles['hero-section']}>
            <div className={styles['frame1']}>
              <div className={styles['text']}>
                <span
                  className={` ${styles['text001']} ${projectStyles['heading-headline1']} `}
                >
                  <span className={styles['text002']}>
                    Lessons and insights
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>from 8 years</span>
                </span>
                <span
                  className={` ${styles['text004']} ${projectStyles['body-regular-body2']} `}
                >
                  <span>
                    Where to grow your business as a photographer: site or
                    social media?
                  </span>
                </span>
              </div>
              <button className={styles['button']}>
                <span
                  className={` ${styles['text006']} ${projectStyles['body-medium-body2']} `}
                >
                  <span>Register</span>
                </span>
              </button>
            </div>
            <img
              src="/illustration1091-bk79.svg"
              alt="Illustration1091"
              className={styles['illustration']}
            />
          </div>
          <div className={styles['clients']}>
            <div className={styles['clients1']}>
              <span
                className={` ${styles['text008']} ${projectStyles['heading-headline2']} `}
              >
                <span>Our Clients</span>
              </span>
              <span
                className={` ${styles['text010']} ${projectStyles['body-regular-body2']} `}
              >
                <span>We have been working with some Fortune 500+ clients</span>
              </span>
            </div>
            <div className={styles['clients-logos']}>
              <div className={styles['logo']}>
                <img
                  src="/logo2118-xwvs.svg"
                  alt="Logo2118"
                  className={styles['logo01']}
                />
              </div>
              <div className={styles['logo02']}>
                <img
                  src="/logo2118-473r.svg"
                  alt="Logo2118"
                  className={styles['logo03']}
                />
              </div>
              <div className={styles['logo04']}>
                <img
                  src="/logo2118-aeq.svg"
                  alt="Logo2118"
                  className={styles['logo05']}
                />
              </div>
              <div className={styles['logo06']}>
                <img
                  src="/logo2118-385h.svg"
                  alt="Logo2118"
                  className={styles['logo07']}
                />
              </div>
              <div className={styles['logo08']}>
                <img
                  src="/logo2118-qt6b.svg"
                  alt="Logo2118"
                  className={styles['logo09']}
                />
              </div>
              <div className={styles['logo10']}>
                <img
                  src="/logo2118-yqz.svg"
                  alt="Logo2118"
                  className={styles['logo11']}
                />
              </div>
              <div className={styles['logo12']}>
                <img
                  src="/logo2118-pq8.svg"
                  alt="Logo2118"
                  className={styles['logo13']}
                />
              </div>
            </div>
          </div>
          <div className={styles['community']}>
            <div className={styles['community1']}>
              <span
                className={` ${styles['text012']} ${projectStyles['heading-headline2']} `}
              >
                <span>Manage your entire community in a single system</span>
              </span>
              <span
                className={` ${styles['text014']} ${projectStyles['body-regular-body2']} `}
              >
                <span>Who is Nextcent suitable for?</span>
              </span>
            </div>
            <div className={styles['frame4']}>
              <div className={styles['membership-organizatios']}>
                <div className={styles['member']}>
                  <div className={styles['icon']}>
                    <img
                      src="/rectangle1571263-bk08-200h.png"
                      alt="Rectangle1571263"
                      className={styles['rectangle157']}
                    />
                    <img
                      src="/icon1363-vxx.svg"
                      alt="Icon1363"
                      className={styles['icon01']}
                    />
                  </div>
                  <span
                    className={` ${styles['text016']} ${projectStyles['heading-headline3']} `}
                  >
                    <span>Membership Organisations</span>
                  </span>
                </div>
                <div className={styles['frame3']}>
                  <span
                    className={` ${styles['text018']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>
                      Our membership management software provides full
                      automation of membership renewals and payments
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles['national-associations']}>
                <div className={styles['member1']}>
                  <div className={styles['icon02']}>
                    <img
                      src="/rectangle1571495-pv7-200h.png"
                      alt="Rectangle1571495"
                      className={styles['rectangle1571']}
                    />
                    <div className={styles['icon03']}>
                      <div>
                        <img
                          src="/vector1496-takr.svg"
                          alt="Vector1496"
                          className={styles['vector']}
                        />
                        <img
                          src="/vector1496-u1pp.svg"
                          alt="Vector1496"
                          className={styles['vector001']}
                        />
                        <img
                          src="/vector1496-zavb.svg"
                          alt="Vector1496"
                          className={styles['vector002']}
                        />
                        <img
                          src="/vector1496-7dkj.svg"
                          alt="Vector1496"
                          className={styles['vector003']}
                        />
                        <img
                          src="/vector1496-m8o5.svg"
                          alt="Vector1496"
                          className={styles['vector004']}
                        />
                        <img
                          src="/vector1496-4cpi.svg"
                          alt="Vector1496"
                          className={styles['vector005']}
                        />
                        <img
                          src="/vector1496-5uso.svg"
                          alt="Vector1496"
                          className={styles['vector006']}
                        />
                        <img
                          src="/vector1496-yq0n.svg"
                          alt="Vector1496"
                          className={styles['vector007']}
                        />
                        <img
                          src="/vector1496-l4vg.svg"
                          alt="Vector1496"
                          className={styles['vector008']}
                        />
                        <img
                          src="/vector1497-u2k.svg"
                          alt="Vector1497"
                          className={styles['vector009']}
                        />
                        <img
                          src="/vector1497-p8l.svg"
                          alt="Vector1497"
                          className={styles['vector010']}
                        />
                        <img
                          src="/vector1497-22aa.svg"
                          alt="Vector1497"
                          className={styles['vector011']}
                        />
                        <img
                          src="/vector1497-b71w.svg"
                          alt="Vector1497"
                          className={styles['vector012']}
                        />
                        <img
                          src="/vector1497-9mjq.svg"
                          alt="Vector1497"
                          className={styles['vector013']}
                        />
                        <img
                          src="/vector1497-tf6r.svg"
                          alt="Vector1497"
                          className={styles['vector014']}
                        />
                        <img
                          src="/vector1497-cbrb.svg"
                          alt="Vector1497"
                          className={styles['vector015']}
                        />
                      </div>
                    </div>
                  </div>
                  <span
                    className={` ${styles['text020']} ${projectStyles['heading-headline3']} `}
                  >
                    <span>National Associations</span>
                  </span>
                </div>
                <div className={styles['frame31']}>
                  <span
                    className={` ${styles['text022']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>
                      Our membership management software provides full
                      automation of membership renewals and payments
                    </span>
                  </span>
                </div>
              </div>
              <div className={styles['national-associations1']}>
                <div className={styles['member2']}>
                  <div className={styles['icon04']}>
                    <img
                      src="/rectangle1571410-u21hi-200h.png"
                      alt="Rectangle1571410"
                      className={styles['rectangle1572']}
                    />
                    <div className={styles['icon05']}>
                      <div className={styles['group2']}>
                        <img
                          src="/vector1410-9zr6.svg"
                          alt="Vector1410"
                          className={styles['vector016']}
                        />
                        <img
                          src="/vector1410-x0a.svg"
                          alt="Vector1410"
                          className={styles['vector017']}
                        />
                        <img
                          src="/vector1410-k4gh.svg"
                          alt="Vector1410"
                          className={styles['vector018']}
                        />
                      </div>
                    </div>
                  </div>
                  <span
                    className={` ${styles['text024']} ${projectStyles['heading-headline3']} `}
                  >
                    <span>Clubs And Groups</span>
                  </span>
                </div>
                <div className={styles['frame32']}>
                  <span
                    className={` ${styles['text026']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>
                      Our membership management software provides full
                      automation of membership renewals and payments
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['body']}>
          <div className={styles['unlock']}>
            <div className={styles['unlock1']}>
              <div className={styles['frame35']}>
                <div className={styles['mobileloginrafiki']}>
                  <div className={styles['backgroundcomplete']}>
                    <img src alt="Vector2111" className={styles['vector019']} />
                    <img src alt="Vector2111" className={styles['vector020']} />
                    <img src alt="Vector2111" className={styles['vector021']} />
                    <img src alt="Vector2111" className={styles['vector022']} />
                    <img src alt="Vector2111" className={styles['vector023']} />
                    <img src alt="Vector2111" className={styles['vector024']} />
                    <img src alt="Vector2111" className={styles['vector025']} />
                    <img src alt="Vector2111" className={styles['vector026']} />
                    <img src alt="Vector2111" className={styles['vector027']} />
                    <img src alt="Vector2111" className={styles['vector028']} />
                    <img src alt="Vector2111" className={styles['vector029']} />
                    <img src alt="Vector2111" className={styles['vector030']} />
                    <img src alt="Vector2111" className={styles['vector031']} />
                    <img src alt="Vector2111" className={styles['vector032']} />
                    <img src alt="Vector2111" className={styles['vector033']} />
                    <img src alt="Vector2111" className={styles['vector034']} />
                    <img src alt="Vector2111" className={styles['vector035']} />
                    <img src alt="Vector2111" className={styles['vector036']} />
                    <img src alt="Vector2111" className={styles['vector037']} />
                    <img src alt="Vector2111" className={styles['vector038']} />
                    <img src alt="Vector2111" className={styles['vector039']} />
                    <img src alt="Vector2111" className={styles['vector040']} />
                    <img src alt="Vector2111" className={styles['vector041']} />
                    <img src alt="Vector2111" className={styles['vector042']} />
                    <img src alt="Vector2111" className={styles['vector043']} />
                    <img src alt="Vector2111" className={styles['vector044']} />
                    <img src alt="Vector2111" className={styles['vector045']} />
                    <img src alt="Vector2111" className={styles['vector046']} />
                    <img src alt="Vector2111" className={styles['vector047']} />
                    <img src alt="Vector2111" className={styles['vector048']} />
                    <img src alt="Vector2111" className={styles['vector049']} />
                    <img src alt="Vector2111" className={styles['vector050']} />
                    <img src alt="Vector2111" className={styles['vector051']} />
                    <img src alt="Vector2111" className={styles['vector052']} />
                    <img src alt="Vector2111" className={styles['vector053']} />
                    <img src alt="Vector2111" className={styles['vector054']} />
                    <img src alt="Vector2111" className={styles['vector055']} />
                    <img src alt="Vector2111" className={styles['vector056']} />
                    <img src alt="Vector2111" className={styles['vector057']} />
                    <img src alt="Vector2111" className={styles['vector058']} />
                    <img src alt="Vector2111" className={styles['vector059']} />
                    <img src alt="Vector2111" className={styles['vector060']} />
                    <img src alt="Vector2111" className={styles['vector061']} />
                    <img src alt="Vector2111" className={styles['vector062']} />
                    <img src alt="Vector2111" className={styles['vector063']} />
                    <img src alt="Vector2111" className={styles['vector064']} />
                    <img src alt="Vector2111" className={styles['vector065']} />
                    <img src alt="Vector2111" className={styles['vector066']} />
                    <img src alt="Vector2111" className={styles['vector067']} />
                  </div>
                  <div className={styles['backgroundsimple']}>
                    <img src alt="Vector2111" className={styles['vector068']} />
                    <img src alt="Vector2111" className={styles['vector069']} />
                  </div>
                  <div className={styles['shadow']}>
                    <img
                      src="/vector2111-ndc9.svg"
                      alt="Vector2111"
                      className={styles['vector070']}
                    />
                  </div>
                  <div className={styles['character2']}>
                    <img
                      src="/vector2111-cbqo.svg"
                      alt="Vector2111"
                      className={styles['vector071']}
                    />
                    <img
                      src="/vector2111-p0pq.svg"
                      alt="Vector2111"
                      className={styles['vector072']}
                    />
                    <img
                      src="/vector2111-qhxs.svg"
                      alt="Vector2111"
                      className={styles['vector073']}
                    />
                    <img
                      src="/vector2111-0aet.svg"
                      alt="Vector2111"
                      className={styles['vector074']}
                    />
                    <img
                      src="/vector2111-tgbr.svg"
                      alt="Vector2111"
                      className={styles['vector075']}
                    />
                    <img
                      src="/vector2111-3kzw.svg"
                      alt="Vector2111"
                      className={styles['vector076']}
                    />
                    <img
                      src="/vector2111-aj1s.svg"
                      alt="Vector2111"
                      className={styles['vector077']}
                    />
                    <img
                      src="/vector2111-6jsd.svg"
                      alt="Vector2111"
                      className={styles['vector078']}
                    />
                    <img
                      src="/vector2111-tbus.svg"
                      alt="Vector2111"
                      className={styles['vector079']}
                    />
                    <img
                      src="/vector2111-qxor.svg"
                      alt="Vector2111"
                      className={styles['vector080']}
                    />
                    <img
                      src="/vector2111-u0is.svg"
                      alt="Vector2111"
                      className={styles['vector081']}
                    />
                    <img
                      src="/vector2111-orxs.svg"
                      alt="Vector2111"
                      className={styles['vector082']}
                    />
                    <img
                      src="/vector2111-f6ch.svg"
                      alt="Vector2111"
                      className={styles['vector083']}
                    />
                    <img
                      src="/vector2111-4406.svg"
                      alt="Vector2111"
                      className={styles['vector084']}
                    />
                    <img
                      src="/vector2111-alyb.svg"
                      alt="Vector2111"
                      className={styles['vector085']}
                    />
                    <img
                      src="/vector2111-if2.svg"
                      alt="Vector2111"
                      className={styles['vector086']}
                    />
                    <img
                      src="/vector2111-udww.svg"
                      alt="Vector2111"
                      className={styles['vector087']}
                    />
                    <img
                      src="/vector2111-eufg.svg"
                      alt="Vector2111"
                      className={styles['vector088']}
                    />
                    <img
                      src="/vector2111-khrd.svg"
                      alt="Vector2111"
                      className={styles['vector089']}
                    />
                    <img
                      src="/vector2111-zddqc.svg"
                      alt="Vector2111"
                      className={styles['vector090']}
                    />
                    <img
                      src="/vector2111-n1b5.svg"
                      alt="Vector2111"
                      className={styles['vector091']}
                    />
                    <img
                      src="/vector2111-l3uk.svg"
                      alt="Vector2111"
                      className={styles['vector092']}
                    />
                    <img
                      src="/vector2111-2scr.svg"
                      alt="Vector2111"
                      className={styles['vector093']}
                    />
                    <img
                      src="/vector2111-0hcb.svg"
                      alt="Vector2111"
                      className={styles['vector094']}
                    />
                    <img
                      src="/vector2111-l6hc.svg"
                      alt="Vector2111"
                      className={styles['vector095']}
                    />
                    <img
                      src="/vector2111-j08a.svg"
                      alt="Vector2111"
                      className={styles['vector096']}
                    />
                    <img
                      src="/vector2111-l7ua.svg"
                      alt="Vector2111"
                      className={styles['vector097']}
                    />
                    <img
                      src="/vector2111-xabj.svg"
                      alt="Vector2111"
                      className={styles['vector098']}
                    />
                    <img
                      src="/vector2111-eqgh.svg"
                      alt="Vector2111"
                      className={styles['vector099']}
                    />
                    <img
                      src="/vector2111-q3uq.svg"
                      alt="Vector2111"
                      className={styles['vector100']}
                    />
                    <img
                      src="/vector2111-8mc.svg"
                      alt="Vector2111"
                      className={styles['vector101']}
                    />
                    <img
                      src="/vector2111-p9q.svg"
                      alt="Vector2111"
                      className={styles['vector102']}
                    />
                    <img
                      src="/vector2111-85q.svg"
                      alt="Vector2111"
                      className={styles['vector103']}
                    />
                    <img
                      src="/vector2111-pynl.svg"
                      alt="Vector2111"
                      className={styles['vector104']}
                    />
                    <img
                      src="/vector2111-bhrd.svg"
                      alt="Vector2111"
                      className={styles['vector105']}
                    />
                    <img
                      src="/vector2111-by9.svg"
                      alt="Vector2111"
                      className={styles['vector106']}
                    />
                    <img
                      src="/vector2111-ta3e.svg"
                      alt="Vector2111"
                      className={styles['vector107']}
                    />
                    <img
                      src="/vector2111-7zig.svg"
                      alt="Vector2111"
                      className={styles['vector108']}
                    />
                    <img
                      src="/vector2111-3so5.svg"
                      alt="Vector2111"
                      className={styles['vector109']}
                    />
                    <img
                      src="/vector2111-tjg.svg"
                      alt="Vector2111"
                      className={styles['vector110']}
                    />
                    <img
                      src="/vector2111-2r0c.svg"
                      alt="Vector2111"
                      className={styles['vector111']}
                    />
                    <img
                      src="/vector2111-e9l.svg"
                      alt="Vector2111"
                      className={styles['vector112']}
                    />
                    <img
                      src="/vector2111-055l.svg"
                      alt="Vector2111"
                      className={styles['vector113']}
                    />
                    <img
                      src="/vector2111-cxk.svg"
                      alt="Vector2111"
                      className={styles['vector114']}
                    />
                    <img
                      src="/vector2111-a2tl.svg"
                      alt="Vector2111"
                      className={styles['vector115']}
                    />
                    <img
                      src="/vector2111-8zmm.svg"
                      alt="Vector2111"
                      className={styles['vector116']}
                    />
                    <img
                      src="/vector2111-4hp2.svg"
                      alt="Vector2111"
                      className={styles['vector117']}
                    />
                    <img
                      src="/vector2111-54xm.svg"
                      alt="Vector2111"
                      className={styles['vector118']}
                    />
                    <img
                      src="/vector2111-9lmn.svg"
                      alt="Vector2111"
                      className={styles['vector119']}
                    />
                    <img
                      src="/vector2111-qjbp.svg"
                      alt="Vector2111"
                      className={styles['vector120']}
                    />
                  </div>
                  <div className={styles['screen']}>
                    <img
                      src="/vector2111-iaas.svg"
                      alt="Vector2111"
                      className={styles['vector121']}
                    />
                    <img
                      src="/vector2111-vhl.svg"
                      alt="Vector2111"
                      className={styles['vector122']}
                    />
                    <img
                      src="/vector2111-zx65.svg"
                      alt="Vector2111"
                      className={styles['vector123']}
                    />
                    <img
                      src="/vector2111-ogu.svg"
                      alt="Vector2111"
                      className={styles['vector124']}
                    />
                    <img
                      src="/vector2111-a68p.svg"
                      alt="Vector2111"
                      className={styles['vector125']}
                    />
                    <img
                      src="/vector2111-wcy.svg"
                      alt="Vector2111"
                      className={styles['vector126']}
                    />
                    <img
                      src="/vector2111-igd9.svg"
                      alt="Vector2111"
                      className={styles['vector127']}
                    />
                    <img
                      src="/vector2111-v03t.svg"
                      alt="Vector2111"
                      className={styles['vector128']}
                    />
                    <img
                      src="/vector2111-0hssw.svg"
                      alt="Vector2111"
                      className={styles['vector129']}
                    />
                    <img
                      src="/vector2111-77h.svg"
                      alt="Vector2111"
                      className={styles['vector130']}
                    />
                    <img
                      src="/vector2111-1jqr.svg"
                      alt="Vector2111"
                      className={styles['vector131']}
                    />
                    <img
                      src="/vector2111-1bpb.svg"
                      alt="Vector2111"
                      className={styles['vector132']}
                    />
                    <img
                      src="/vector2111-7mt7.svg"
                      alt="Vector2111"
                      className={styles['vector133']}
                    />
                    <img
                      src="/vector2111-l5h.svg"
                      alt="Vector2111"
                      className={styles['vector134']}
                    />
                    <img
                      src="/vector2111-u4b.svg"
                      alt="Vector2111"
                      className={styles['vector135']}
                    />
                    <img
                      src="/vector2111-oe4.svg"
                      alt="Vector2111"
                      className={styles['vector136']}
                    />
                    <img
                      src="/vector2111-58vpl.svg"
                      alt="Vector2111"
                      className={styles['vector137']}
                    />
                    <img
                      src="/vector2111-qwkh.svg"
                      alt="Vector2111"
                      className={styles['vector138']}
                    />
                    <img
                      src="/vector2111-g4rw.svg"
                      alt="Vector2111"
                      className={styles['vector139']}
                    />
                    <img
                      src="/vector2111-3plr.svg"
                      alt="Vector2111"
                      className={styles['vector140']}
                    />
                    <img
                      src="/vector2111-wlyk.svg"
                      alt="Vector2111"
                      className={styles['vector141']}
                    />
                    <img
                      src="/vector2111-3cbb.svg"
                      alt="Vector2111"
                      className={styles['vector142']}
                    />
                    <img
                      src="/vector2111-dfx.svg"
                      alt="Vector2111"
                      className={styles['vector143']}
                    />
                    <img
                      src="/vector2111-nsc.svg"
                      alt="Vector2111"
                      className={styles['vector144']}
                    />
                    <img
                      src="/vector2111-i264.svg"
                      alt="Vector2111"
                      className={styles['vector145']}
                    />
                  </div>
                  <div className={styles['character1']}>
                    <img
                      src="/vector2111-qcwx.svg"
                      alt="Vector2111"
                      className={styles['vector146']}
                    />
                    <img
                      src="/vector2111-zokt.svg"
                      alt="Vector2111"
                      className={styles['vector147']}
                    />
                    <img
                      src="/vector2111-frd.svg"
                      alt="Vector2111"
                      className={styles['vector148']}
                    />
                    <img
                      src="/vector2111-rja8.svg"
                      alt="Vector2111"
                      className={styles['vector149']}
                    />
                    <img
                      src="/vector2111-6am5.svg"
                      alt="Vector2111"
                      className={styles['vector150']}
                    />
                    <img
                      src="/vector2111-lkz9.svg"
                      alt="Vector2111"
                      className={styles['vector151']}
                    />
                    <img
                      src="/vector2111-xi2s.svg"
                      alt="Vector2111"
                      className={styles['vector152']}
                    />
                    <img
                      src="/vector2111-0dq5.svg"
                      alt="Vector2111"
                      className={styles['vector153']}
                    />
                    <img
                      src="/vector2111-1xcm.svg"
                      alt="Vector2111"
                      className={styles['vector154']}
                    />
                    <img
                      src="/vector2111-1bx.svg"
                      alt="Vector2111"
                      className={styles['vector155']}
                    />
                    <img
                      src="/vector2111-vy84.svg"
                      alt="Vector2111"
                      className={styles['vector156']}
                    />
                    <img
                      src="/vector2111-m8xv.svg"
                      alt="Vector2111"
                      className={styles['vector157']}
                    />
                    <img
                      src="/vector2111-fope.svg"
                      alt="Vector2111"
                      className={styles['vector158']}
                    />
                    <img
                      src="/vector2111-c28e.svg"
                      alt="Vector2111"
                      className={styles['vector159']}
                    />
                    <img
                      src="/vector2111-7ky7.svg"
                      alt="Vector2111"
                      className={styles['vector160']}
                    />
                    <img
                      src="/vector2111-yh6q.svg"
                      alt="Vector2111"
                      className={styles['vector161']}
                    />
                    <img
                      src="/vector2111-6bbr.svg"
                      alt="Vector2111"
                      className={styles['vector162']}
                    />
                    <img
                      src="/vector2111-boa1.svg"
                      alt="Vector2111"
                      className={styles['vector163']}
                    />
                    <img
                      src="/vector2111-xpea.svg"
                      alt="Vector2111"
                      className={styles['vector164']}
                    />
                    <img
                      src="/vector2111-9ms.svg"
                      alt="Vector2111"
                      className={styles['vector165']}
                    />
                    <img
                      src="/vector2111-am7h.svg"
                      alt="Vector2111"
                      className={styles['vector166']}
                    />
                    <img
                      src="/vector2111-4ak4.svg"
                      alt="Vector2111"
                      className={styles['vector167']}
                    />
                    <img
                      src="/vector2111-0v5.svg"
                      alt="Vector2111"
                      className={styles['vector168']}
                    />
                    <img
                      src="/vector2111-qjg.svg"
                      alt="Vector2111"
                      className={styles['vector169']}
                    />
                    <img
                      src="/vector2111-z8zs.svg"
                      alt="Vector2111"
                      className={styles['vector170']}
                    />
                    <img
                      src="/vector2111-mx0l.svg"
                      alt="Vector2111"
                      className={styles['vector171']}
                    />
                    <img
                      src="/vector2111-wkf9.svg"
                      alt="Vector2111"
                      className={styles['vector172']}
                    />
                    <img
                      src="/vector2111-ev5.svg"
                      alt="Vector2111"
                      className={styles['vector173']}
                    />
                    <img
                      src="/vector2111-8y1p.svg"
                      alt="Vector2111"
                      className={styles['vector174']}
                    />
                    <img
                      src="/vector2111-m5kh.svg"
                      alt="Vector2111"
                      className={styles['vector175']}
                    />
                    <img
                      src="/vector2111-x69.svg"
                      alt="Vector2111"
                      className={styles['vector176']}
                    />
                    <img
                      src="/vector2111-1jtd.svg"
                      alt="Vector2111"
                      className={styles['vector177']}
                    />
                    <img
                      src="/vector2111-b5q9.svg"
                      alt="Vector2111"
                      className={styles['vector178']}
                    />
                    <img
                      src="/vector2111-a8f8.svg"
                      alt="Vector2111"
                      className={styles['vector179']}
                    />
                    <img
                      src="/vector2111-5tiw.svg"
                      alt="Vector2111"
                      className={styles['vector180']}
                    />
                    <img
                      src="/vector2111-eoj.svg"
                      alt="Vector2111"
                      className={styles['vector181']}
                    />
                    <img
                      src="/vector2111-pkws.svg"
                      alt="Vector2111"
                      className={styles['vector182']}
                    />
                    <img
                      src="/vector2111-zab.svg"
                      alt="Vector2111"
                      className={styles['vector183']}
                    />
                    <img
                      src="/vector2111-13wo.svg"
                      alt="Vector2111"
                      className={styles['vector184']}
                    />
                    <img
                      src="/vector2111-9874.svg"
                      alt="Vector2111"
                      className={styles['vector185']}
                    />
                    <img
                      src="/vector2111-yrg.svg"
                      alt="Vector2111"
                      className={styles['vector186']}
                    />
                    <img
                      src="/vector2111-dena.svg"
                      alt="Vector2111"
                      className={styles['vector187']}
                    />
                    <img
                      src="/vector2111-x3wq.svg"
                      alt="Vector2111"
                      className={styles['vector188']}
                    />
                    <img
                      src="/vector2111-t66e7.svg"
                      alt="Vector2111"
                      className={styles['vector189']}
                    />
                    <img
                      src="/vector2111-6mp.svg"
                      alt="Vector2111"
                      className={styles['vector190']}
                    />
                    <img
                      src="/vector2111-maxh.svg"
                      alt="Vector2111"
                      className={styles['vector191']}
                    />
                  </div>
                </div>
              </div>
              <div className={styles['frame6']}>
                <div className={styles['frame5']}>
                  <span
                    className={` ${styles['text028']} ${projectStyles['heading-headline2']} `}
                  >
                    <span>
                      The unseen of spending three years at Pixelgrade
                    </span>
                  </span>
                  <span
                    className={` ${styles['text030']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed sit amet justo ipsum. Sed accumsan quam vitae est
                      varius fringilla. Pellentesque placerat vestibulum lorem
                      sed porta. Nullam mattis tristique iaculis. Nullam
                      pulvinar sit amet risus pretium auctor. Etiam quis massa
                      pulvinar, aliquam quam vitae, tempus sem. Donec elementum
                      pulvinar odio.
                    </span>
                  </span>
                </div>
                <button className={styles['button1']}>
                  <span
                    className={` ${styles['text032']} ${projectStyles['body-medium-body2']} `}
                  >
                    <span>Learn More</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className={styles['achievements']}>
            <div className={styles['section-heading']}>
              <div className={styles['section-heading1']}>
                <span
                  className={` ${styles['text034']} ${projectStyles['heading-headline2']} `}
                >
                  <span className={styles['text035']}>
                    Helping a local
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>business reinvent itself</span>
                </span>
              </div>
              <span
                className={` ${styles['text037']} ${projectStyles['body-regular-body2']} `}
              >
                <span>We reached here with our hard work and dedication</span>
              </span>
            </div>
            <div className={styles['counts']}>
              <div className={styles['row1']}>
                <div className={styles['frame2']}>
                  <img
                    src="/icon1614-2g1.svg"
                    alt="Icon1614"
                    className={styles['icon06']}
                  />
                  <div className={styles['details']}>
                    <span
                      className={` ${styles['text039']} ${projectStyles['heading-headline3']} `}
                    >
                      <span>2,245,341</span>
                    </span>
                    <span
                      className={` ${styles['text041']} ${projectStyles['body-regular-body2']} `}
                    >
                      <span>Members</span>
                    </span>
                  </div>
                </div>
                <div>
                  <div className={styles['icon07']}>
                    <div className={styles['group21']}>
                      <img
                        src="/vector1614-fzz.svg"
                        alt="Vector1614"
                        className={styles['vector192']}
                      />
                      <img
                        src="/vector1614-srtf.svg"
                        alt="Vector1614"
                        className={styles['vector193']}
                      />
                      <img
                        src="/vector1614-kxqu.svg"
                        alt="Vector1614"
                        className={styles['vector194']}
                      />
                    </div>
                  </div>
                  <div className={styles['details1']}>
                    <span
                      className={` ${styles['text043']} ${projectStyles['heading-headline3']} `}
                    >
                      <span>46,328</span>
                    </span>
                    <span
                      className={` ${styles['text045']} ${projectStyles['body-regular-body2']} `}
                    >
                      <span>Clubs</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles['row2']}>
                <div className={styles['frame33']}>
                  <img
                    src="/icon1614-65y.svg"
                    alt="Icon1614"
                    className={styles['icon08']}
                  />
                  <div className={styles['details2']}>
                    <span
                      className={` ${styles['text047']} ${projectStyles['heading-headline3']} `}
                    >
                      <span>828,867</span>
                    </span>
                    <span
                      className={` ${styles['text049']} ${projectStyles['body-regular-body2']} `}
                    >
                      <span>Event Bookings</span>
                    </span>
                  </div>
                </div>
                <div className={styles['frame41']}>
                  <img
                    src="/icon1614-gvv.svg"
                    alt="Icon1614"
                    className={styles['icon09']}
                  />
                  <div className={styles['details3']}>
                    <span
                      className={` ${styles['text051']} ${projectStyles['heading-headline3']} `}
                    >
                      <span>1,926,436</span>
                    </span>
                    <span
                      className={` ${styles['text053']} ${projectStyles['body-regular-body2']} `}
                    >
                      <span>Payments</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['calender']}>
            <div className={styles['unlock2']}>
              <div className={styles['mobileloginpana']}>
                <div className={styles['backgroundcomplete1']}>
                  <img src alt="Vector2111" className={styles['vector195']} />
                  <img src alt="Vector2111" className={styles['vector196']} />
                  <img src alt="Vector2111" className={styles['vector197']} />
                  <img src alt="Vector2111" className={styles['vector198']} />
                  <img src alt="Vector2111" className={styles['vector199']} />
                  <img src alt="Vector2111" className={styles['vector200']} />
                  <img src alt="Vector2111" className={styles['vector201']} />
                  <img src alt="Vector2111" className={styles['vector202']} />
                  <img src alt="Vector2111" className={styles['vector203']} />
                  <img src alt="Vector2111" className={styles['vector204']} />
                  <img src alt="Vector2111" className={styles['vector205']} />
                  <img src alt="Vector2111" className={styles['vector206']} />
                  <img src alt="Vector2111" className={styles['vector207']} />
                  <img src alt="Vector2111" className={styles['vector208']} />
                  <img src alt="Vector2111" className={styles['vector209']} />
                  <img src alt="Vector2111" className={styles['vector210']} />
                  <img src alt="Vector2111" className={styles['vector211']} />
                  <img src alt="Vector2111" className={styles['vector212']} />
                  <img src alt="Vector2111" className={styles['vector213']} />
                  <img src alt="Vector2111" className={styles['vector214']} />
                  <img src alt="Vector2111" className={styles['vector215']} />
                  <img src alt="Vector2111" className={styles['vector216']} />
                  <img src alt="Vector2111" className={styles['vector217']} />
                  <img src alt="Vector2111" className={styles['vector218']} />
                  <img src alt="Vector2111" className={styles['vector219']} />
                  <img src alt="Vector2111" className={styles['vector220']} />
                  <img src alt="Vector2111" className={styles['vector221']} />
                  <img src alt="Vector2111" className={styles['vector222']} />
                  <img src alt="Vector2111" className={styles['vector223']} />
                  <img src alt="Vector2111" className={styles['vector224']} />
                  <img src alt="Vector2111" className={styles['vector225']} />
                  <img src alt="Vector2111" className={styles['vector226']} />
                  <img src alt="Vector2111" className={styles['vector227']} />
                </div>
                <div className={styles['backgroundsimple1']}>
                  <img src alt="Vector2111" className={styles['vector228']} />
                </div>
                <div className={styles['floor']}>
                  <img
                    src="/vector2111-1gb5.svg"
                    alt="Vector2111"
                    className={styles['vector229']}
                  />
                </div>
                <div className={styles['plant']}>
                  <img
                    src="/vector2111-ip3s.svg"
                    alt="Vector2111"
                    className={styles['vector230']}
                  />
                  <img
                    src="/vector2111-e3gq.svg"
                    alt="Vector2111"
                    className={styles['vector231']}
                  />
                  <img
                    src="/vector2111-iahg.svg"
                    alt="Vector2111"
                    className={styles['vector232']}
                  />
                  <img
                    src="/vector2111-ct8p.svg"
                    alt="Vector2111"
                    className={styles['vector233']}
                  />
                  <img
                    src="/vector2111-m1fa.svg"
                    alt="Vector2111"
                    className={styles['vector234']}
                  />
                  <img
                    src="/vector2111-590l.svg"
                    alt="Vector2111"
                    className={styles['vector235']}
                  />
                </div>
                <div className={styles['padlock']}>
                  <img
                    src="/vector2111-qj8r.svg"
                    alt="Vector2111"
                    className={styles['vector236']}
                  />
                  <img
                    src="/vector2111-193e.svg"
                    alt="Vector2111"
                    className={styles['vector237']}
                  />
                  <img
                    src="/vector2111-eupc.svg"
                    alt="Vector2111"
                    className={styles['vector238']}
                  />
                  <img
                    src="/vector2111-m2p.svg"
                    alt="Vector2111"
                    className={styles['vector239']}
                  />
                  <img
                    src="/vector2111-lvt.svg"
                    alt="Vector2111"
                    className={styles['vector240']}
                  />
                </div>
                <div className={styles['device']}>
                  <img
                    src="/vector2111-hsgf.svg"
                    alt="Vector2111"
                    className={styles['vector241']}
                  />
                  <img
                    src="/vector2111-fgvp.svg"
                    alt="Vector2111"
                    className={styles['vector242']}
                  />
                  <img
                    src="/vector2111-ob78.svg"
                    alt="Vector2111"
                    className={styles['vector243']}
                  />
                  <span className={styles['text055']}>
                    <span>SING UP</span>
                  </span>
                  <img
                    src="/vector2111-ud0d.svg"
                    alt="Vector2111"
                    className={styles['vector244']}
                  />
                  <img
                    src="/vector2111-iiuo.svg"
                    alt="Vector2111"
                    className={styles['vector245']}
                  />
                  <img
                    src="/vector2111-gvdl.svg"
                    alt="Vector2111"
                    className={styles['vector246']}
                  />
                  <img
                    src="/vector2111-af2n.svg"
                    alt="Vector2111"
                    className={styles['vector247']}
                  />
                  <img
                    src="/vector2111-wlf8.svg"
                    alt="Vector2111"
                    className={styles['vector248']}
                  />
                  <img
                    src="/vector2111-rwdc.svg"
                    alt="Vector2111"
                    className={styles['vector249']}
                  />
                  <img
                    src="/vector2111-yhh.svg"
                    alt="Vector2111"
                    className={styles['vector250']}
                  />
                  <img
                    src="/vector2111-rq9.svg"
                    alt="Vector2111"
                    className={styles['vector251']}
                  />
                  <img
                    src="/vector2111-myo.svg"
                    alt="Vector2111"
                    className={styles['vector252']}
                  />
                  <img
                    src="/vector2111-vj5g.svg"
                    alt="Vector2111"
                    className={styles['vector253']}
                  />
                  <img
                    src="/vector2111-ht0m.svg"
                    alt="Vector2111"
                    className={styles['vector254']}
                  />
                  <img
                    src="/vector2111-09y.svg"
                    alt="Vector2111"
                    className={styles['vector255']}
                  />
                  <img
                    src="/vector2111-ng01e.svg"
                    alt="Vector2111"
                    className={styles['vector256']}
                  />
                  <img
                    src="/vector2111-94h9.svg"
                    alt="Vector2111"
                    className={styles['vector257']}
                  />
                  <img
                    src="/vector2111-qrir.svg"
                    alt="Vector2111"
                    className={styles['vector258']}
                  />
                  <img
                    src="/vector2111-lf9c.svg"
                    alt="Vector2111"
                    className={styles['vector259']}
                  />
                  <img
                    src="/vector2111-nx1.svg"
                    alt="Vector2111"
                    className={styles['vector260']}
                  />
                  <img
                    src="/vector2111-1m9.svg"
                    alt="Vector2111"
                    className={styles['vector261']}
                  />
                  <img
                    src="/vector2111-2sxq.svg"
                    alt="Vector2111"
                    className={styles['vector262']}
                  />
                  <img
                    src="/vector2111-aysm.svg"
                    alt="Vector2111"
                    className={styles['vector263']}
                  />
                  <img
                    src="/vector2111-37o.svg"
                    alt="Vector2111"
                    className={styles['vector264']}
                  />
                  <img
                    src="/vector2111-b6ia.svg"
                    alt="Vector2111"
                    className={styles['vector265']}
                  />
                  <div className={styles['group']}>
                    <img
                      src="/vector2111-3pl.svg"
                      alt="Vector2111"
                      className={styles['vector266']}
                    />
                    <img
                      src="/vector2111-qifq.svg"
                      alt="Vector2111"
                      className={styles['vector267']}
                    />
                    <img
                      src="/vector2111-fqgm.svg"
                      alt="Vector2111"
                      className={styles['vector268']}
                    />
                    <img
                      src="/vector2111-71fv.svg"
                      alt="Vector2111"
                      className={styles['vector269']}
                    />
                    <img
                      src="/vector2111-qurq.svg"
                      alt="Vector2111"
                      className={styles['vector270']}
                    />
                    <img
                      src="/vector2111-wto9.svg"
                      alt="Vector2111"
                      className={styles['vector271']}
                    />
                    <img
                      src="/vector2111-8sai.svg"
                      alt="Vector2111"
                      className={styles['vector272']}
                    />
                    <img
                      src="/vector2111-lloa.svg"
                      alt="Vector2111"
                      className={styles['vector273']}
                    />
                    <img
                      src="/vector2111-czqk.svg"
                      alt="Vector2111"
                      className={styles['vector274']}
                    />
                  </div>
                  <img
                    src="/vector2111-qf56.svg"
                    alt="Vector2111"
                    className={styles['vector275']}
                  />
                  <img
                    src="/vector2111-avde.svg"
                    alt="Vector2111"
                    className={styles['vector276']}
                  />
                  <img
                    src="/vector2111-wf3l.svg"
                    alt="Vector2111"
                    className={styles['vector277']}
                  />
                  <img
                    src="/vector2111-0lj8.svg"
                    alt="Vector2111"
                    className={styles['vector278']}
                  />
                </div>
                <div className={styles['speechbubble']}>
                  <img
                    src="/vector2111-vjea.svg"
                    alt="Vector2111"
                    className={styles['vector279']}
                  />
                  <img
                    src="/vector2111-565g.svg"
                    alt="Vector2111"
                    className={styles['vector280']}
                  />
                  <img
                    src="/vector2111-k8m.svg"
                    alt="Vector2111"
                    className={styles['vector281']}
                  />
                </div>
                <div className={styles['character']}>
                  <img
                    src="/vector2111-1az6.svg"
                    alt="Vector2111"
                    className={styles['vector282']}
                  />
                  <img
                    src="/vector2111-3iwr.svg"
                    alt="Vector2111"
                    className={styles['vector283']}
                  />
                  <img
                    src="/vector2111-qy7c.svg"
                    alt="Vector2111"
                    className={styles['vector284']}
                  />
                  <img
                    src="/vector2111-ohpd.svg"
                    alt="Vector2111"
                    className={styles['vector285']}
                  />
                  <img
                    src="/vector2111-hx2m.svg"
                    alt="Vector2111"
                    className={styles['vector286']}
                  />
                  <img
                    src="/vector2111-3uyg.svg"
                    alt="Vector2111"
                    className={styles['vector287']}
                  />
                  <img
                    src="/vector2111-5p4s.svg"
                    alt="Vector2111"
                    className={styles['vector288']}
                  />
                  <img
                    src="/vector2111-ncvi.svg"
                    alt="Vector2111"
                    className={styles['vector289']}
                  />
                  <img
                    src="/vector2111-wacl.svg"
                    alt="Vector2111"
                    className={styles['vector290']}
                  />
                  <img
                    src="/vector2111-4rha.svg"
                    alt="Vector2111"
                    className={styles['vector291']}
                  />
                  <img
                    src="/vector2111-7gv.svg"
                    alt="Vector2111"
                    className={styles['vector292']}
                  />
                  <img
                    src="/vector2111-8kd.svg"
                    alt="Vector2111"
                    className={styles['vector293']}
                  />
                  <img
                    src="/vector2111-tkum.svg"
                    alt="Vector2111"
                    className={styles['vector294']}
                  />
                  <img
                    src="/vector2111-5tek.svg"
                    alt="Vector2111"
                    className={styles['vector295']}
                  />
                  <img
                    src="/vector2111-2vdd.svg"
                    alt="Vector2111"
                    className={styles['vector296']}
                  />
                  <img
                    src="/vector2111-vpq3.svg"
                    alt="Vector2111"
                    className={styles['vector297']}
                  />
                  <img
                    src="/vector2111-e5fd.svg"
                    alt="Vector2111"
                    className={styles['vector298']}
                  />
                  <img
                    src="/vector2111-jf4b.svg"
                    alt="Vector2111"
                    className={styles['vector299']}
                  />
                  <img
                    src="/vector2111-342y.svg"
                    alt="Vector2111"
                    className={styles['vector300']}
                  />
                  <img
                    src="/vector2111-seao.svg"
                    alt="Vector2111"
                    className={styles['vector301']}
                  />
                  <img
                    src="/vector2111-32x6.svg"
                    alt="Vector2111"
                    className={styles['vector302']}
                  />
                  <img
                    src="/vector2111-ur2b.svg"
                    alt="Vector2111"
                    className={styles['vector303']}
                  />
                  <img
                    src="/vector2111-olev.svg"
                    alt="Vector2111"
                    className={styles['vector304']}
                  />
                  <img
                    src="/vector2111-4g3f.svg"
                    alt="Vector2111"
                    className={styles['vector305']}
                  />
                  <img
                    src="/vector2111-12a.svg"
                    alt="Vector2111"
                    className={styles['vector306']}
                  />
                  <img
                    src="/vector2111-7hwl.svg"
                    alt="Vector2111"
                    className={styles['vector307']}
                  />
                  <img
                    src="/vector2111-fxu.svg"
                    alt="Vector2111"
                    className={styles['vector308']}
                  />
                  <img
                    src="/vector2111-z92.svg"
                    alt="Vector2111"
                    className={styles['vector309']}
                  />
                  <img
                    src="/vector2111-4my.svg"
                    alt="Vector2111"
                    className={styles['vector310']}
                  />
                  <img
                    src="/vector2111-h8l.svg"
                    alt="Vector2111"
                    className={styles['vector311']}
                  />
                  <img
                    src="/vector2111-fop9.svg"
                    alt="Vector2111"
                    className={styles['vector312']}
                  />
                  <img
                    src="/vector2111-64s8.svg"
                    alt="Vector2111"
                    className={styles['vector313']}
                  />
                  <img
                    src="/vector2111-znlp.svg"
                    alt="Vector2111"
                    className={styles['vector314']}
                  />
                  <img
                    src="/vector2111-qtk.svg"
                    alt="Vector2111"
                    className={styles['vector315']}
                  />
                  <img
                    src="/vector2111-1erk.svg"
                    alt="Vector2111"
                    className={styles['vector316']}
                  />
                  <div
                    className={styles['group1']}
                    className={styles['group1']}
                  >
                    <img
                      src="/vector2111-iis.svg"
                      alt="Vector2111"
                      className={styles['vector317']}
                    />
                  </div>
                </div>
              </div>
              <div className={styles['frame61']}>
                <div className={styles['frame51']}>
                  <span
                    className={` ${styles['text057']} ${projectStyles['heading-headline2']} `}
                  >
                    <span>How to design your site footer like we did</span>
                  </span>
                  <span
                    className={` ${styles['text059']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>
                      Donec a eros justo. Fusce egestas tristique ultrices. Nam
                      tempor, augue nec tincidunt molestie, massa nunc varius
                      arcu, at scelerisque elit erat a magna. Donec quis erat at
                      libero ultrices mollis. In hac habitasse platea dictumst.
                      Vivamus vehicula leo dui, at porta nisi facilisis finibus.
                      In euismod augue vitae nisi ultricies, non aliquet urna
                      tincidunt. Integer in nisi eget nulla commodo faucibus
                      efficitur quis massa. Praesent felis est, finibus et nisi
                      ac, hendrerit venenatis libero. Donec consectetur faucibus
                      ipsum id gravida.
                    </span>
                  </span>
                </div>
                <button className={styles['button2']}>
                  <span
                    className={` ${styles['text061']} ${projectStyles['body-medium-body2']} `}
                  >
                    <span>Learn More</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className={styles['customers']}>
            <img
              src="/image92274-jozc-400w.png"
              alt="image92274"
              className={styles['image9']}
            />
            <div className={styles['frame11']} className={styles['frame11']}>
              <div className={styles['content']}>
                <span
                  className={` ${styles['text063']} ${projectStyles['body-medium-body2']} `}
                >
                  <span>
                    Maecenas dignissim justo eget nulla rutrum molestie.
                    Maecenas lobortis sem dui, vel rutrum risus tincidunt
                    ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
                    tristique quam in, gravida enim. Nullam ut molestie arcu, at
                    hendrerit elit. Morbi laoreet elit at ligula molestie, nec
                    molestie mi blandit. Suspendisse cursus tellus sed augue
                    ultrices, quis tristique nulla sodales. Suspendisse eget
                    lorem eu turpis vestibulum pretium. Suspendisse potenti.
                    Quisque malesuada enim sapien, vitae placerat ante feugiat
                    eget. Quisque vulputate odio neque, eget efficitur libero
                    condimentum id. Curabitur id nibh id sem dignissim finibus
                    ac sit amet magna.
                  </span>
                </span>
                <div className={styles['frame7']}>
                  <span
                    className={` ${styles['text065']} ${projectStyles['heading-headline4']} `}
                  >
                    <span>Tim Smith</span>
                  </span>
                  <span
                    className={` ${styles['text067']} ${projectStyles['body-regular-body2']} `}
                  >
                    <span>British Dragon Boat Racing Association</span>
                  </span>
                </div>
              </div>
              <div className={styles['frame14']}>
                <div className={styles['frame10']}>
                  <div className={styles['logo14']}>
                    <img
                      src="/logo2117-8br.svg"
                      alt="Logo2117"
                      className={styles['logo15']}
                    />
                  </div>
                  <div className={styles['logo16']}>
                    <img
                      src="/logo2117-icyn.svg"
                      alt="Logo2117"
                      className={styles['logo17']}
                    />
                  </div>
                  <div className={styles['logo18']}>
                    <img
                      src="/logo2117-x2pa.svg"
                      alt="Logo2117"
                      className={styles['logo19']}
                    />
                  </div>
                  <div className={styles['logo20']}>
                    <img
                      src="/logo2117-to9p.svg"
                      alt="Logo2117"
                      className={styles['logo21']}
                    />
                  </div>
                  <div className={styles['logo22']}>
                    <img
                      src="/logo2117-h9p.svg"
                      alt="Logo2117"
                      className={styles['logo23']}
                    />
                  </div>
                  <div className={styles['logo24']}>
                    <img
                      src="/logo2117-u4xa.svg"
                      alt="Logo2117"
                      className={styles['logo25']}
                    />
                  </div>
                </div>
                <div className={styles['frame13']}>
                  <span
                    className={` ${styles['text069']} ${projectStyles['heading-headline4']} `}
                  >
                    <span>Meet all customers</span>
                  </span>
                  <div className={styles['frame24-arrows-directions-right']}>
                    <div className={styles['right']}>
                      <img
                        src="/vectori227-5n.svg"
                        alt="VectorI227"
                        className={styles['vector318']}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['community-updates']}>
            <div className={styles['community2']}>
              <span
                className={` ${styles['text071']} ${projectStyles['heading-headline2']} `}
              >
                <span>Caring is the new marketing</span>
              </span>
              <span
                className={` ${styles['text073']} ${projectStyles['body-regular-body2']} `}
              >
                <span>
                  The Nexcent blog is the best place to read about the latest
                  membership insights, trends and more. See who&apos;s joining
                  the community, read about how our community are increasing
                  their membership income and lot&apos;s more.​
                </span>
              </span>
            </div>
            <div className={styles['frame15']}>
              <div className={styles['frame12']}>
                <img
                  src="/image182290-amp-400w.png"
                  alt="image182290"
                  className={styles['image18']}
                />
                <div className={styles['content1']}>
                  <span
                    className={` ${styles['text075']} ${projectStyles['heading-headline4']} `}
                  >
                    <span>
                      Creating Streamlined Safeguarding Processes with OneRen
                    </span>
                  </span>
                  <div className={styles['frame131']}>
                    <span
                      className={` ${styles['text077']} ${projectStyles['heading-headline4']} `}
                    >
                      <span>Readmore</span>
                    </span>
                    <div className={styles['frame24-arrows-directions-right1']}>
                      <div className={styles['right1']}>
                        <img
                          src="/vectori229-ygy4.svg"
                          alt="VectorI229"
                          className={styles['vector319']}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['frame21']}>
                <img
                  src="/image192290-756r-400w.png"
                  alt="image192290"
                  className={styles['image19']}
                />
                <div className={styles['content2']}>
                  <span
                    className={` ${styles['text079']} ${projectStyles['heading-headline4']} `}
                  >
                    <span>
                      What are your safeguarding responsibilities and how can
                      you manage them?
                    </span>
                  </span>
                  <div className={styles['frame132']}>
                    <span
                      className={` ${styles['text081']} ${projectStyles['heading-headline4']} `}
                    >
                      <span>Readmore</span>
                    </span>
                    <div className={styles['frame24-arrows-directions-right2']}>
                      <div className={styles['right2']}>
                        <img
                          src="/vectori228-5atc.svg"
                          alt="VectorI228"
                          className={styles['vector320']}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['frame34']}>
                <img
                  src="/image202291-p8-400w.png"
                  alt="image202291"
                  className={styles['image20']}
                />
                <div className={styles['content3']}>
                  <span
                    className={` ${styles['text083']} ${projectStyles['heading-headline4']} `}
                  >
                    <span>
                      Revamping the Membership Model with Triathlon Australia
                    </span>
                  </span>
                  <div className={styles['frame133']}>
                    <span
                      className={` ${styles['text085']} ${projectStyles['heading-headline4']} `}
                    >
                      <span>Readmore</span>
                    </span>
                    <div className={styles['frame24-arrows-directions-right3']}>
                      <div className={styles['right3']}>
                        <img
                          src="/vectori228-sqd.svg"
                          alt="VectorI228"
                          className={styles['vector321']}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['dot']}>
          <img
            src="/ellipse51774-clqn-200h.png"
            alt="Ellipse51774"
            className={styles['ellipse5']}
          />
          <img
            src="/ellipse61774-gbwh-200h.png"
            alt="Ellipse61774"
            className={styles['ellipse6']}
          />
          <img
            src="/ellipse71774-ko4i-200h.png"
            alt="Ellipse71774"
            className={styles['ellipse7']}
          />
        </div>
        <div className={styles['footer']}>
          <div className={styles['frame16']}>
            <span
              className={` ${styles['text087']} ${projectStyles['heading-headline1']} `}
            >
              <span>Pellentesque suscipit fringilla libero eu.</span>
            </span>
            <button className={styles['button3']}>
              <span
                className={` ${styles['text089']} ${projectStyles['body-medium-body2']} `}
              >
                <span>Get a Demo</span>
              </span>
              <div className={styles['frame16-arrows-directions-right']}>
                <div className={styles['down']}>
                  <img
                    src="/vectori229-g7zq.svg"
                    alt="VectorI229"
                    className={styles['vector322']}
                  />
                </div>
              </div>
            </button>
          </div>
          <div className={styles['footer-big4']}>
            <div className={styles['company-info']}>
              <img
                src="/logoi211-4ow4.svg"
                alt="LogoI211"
                className={styles['logo26']}
              />
              <div className={styles['copyright']}>
                <span
                  className={` ${styles['text091']} ${projectStyles['body-regular-body3']} `}
                >
                  <span>Copyright © 2020 Nexcent ltd.</span>
                </span>
                <span
                  className={` ${styles['text093']} ${projectStyles['body-regular-body3']} `}
                >
                  <span>All rights reserved</span>
                </span>
              </div>
              <div className={styles['social-links']}>
                <img
                  src="/socialiconsi211-4cnn.svg"
                  alt="SocialIconsI211"
                  className={styles['social-icons']}
                />
                <img
                  src="/socialiconsi211-rfdi.svg"
                  alt="SocialIconsI211"
                  className={styles['social-icons1']}
                />
                <img
                  src="/socialiconsi211-6mx6.svg"
                  alt="SocialIconsI211"
                  className={styles['social-icons2']}
                />
                <img
                  src="/socialiconsi211-b92.svg"
                  alt="SocialIconsI211"
                  className={styles['social-icons3']}
                />
              </div>
            </div>
            <div className={styles['links']}>
              <div className={styles['col1']}>
                <span
                  className={` ${styles['text095']} ${projectStyles['heading-headline4']} `}
                >
                  <span>Company</span>
                </span>
                <div className={styles['list-items']}>
                  <span
                    className={` ${styles['text097']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>About us</span>
                  </span>
                  <span
                    className={` ${styles['text099']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>Blog</span>
                  </span>
                  <span
                    className={` ${styles['text101']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>Contact us</span>
                  </span>
                  <span
                    className={` ${styles['text103']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>Pricing</span>
                  </span>
                  <span
                    className={` ${styles['text105']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>Testimonials</span>
                  </span>
                </div>
              </div>
              <div className={styles['col2']}>
                <span
                  className={` ${styles['text107']} ${projectStyles['heading-headline4']} `}
                >
                  <span>Support</span>
                </span>
                <div className={styles['list-items1']}>
                  <span
                    className={` ${styles['text109']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>Help center</span>
                  </span>
                  <span
                    className={` ${styles['text111']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>Terms of service</span>
                  </span>
                  <span
                    className={` ${styles['text113']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>Legal</span>
                  </span>
                  <span
                    className={` ${styles['text115']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>Privacy policy</span>
                  </span>
                  <span
                    className={` ${styles['text117']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>Status</span>
                  </span>
                </div>
              </div>
              <div className={styles['col3']}>
                <span
                  className={` ${styles['text119']} ${projectStyles['heading-headline4']} `}
                >
                  <span>Stay up to date</span>
                </span>
                <div className={styles['email-input-field']}>
                  <img
                    src="/essentialiconssendi211-jsqo.svg"
                    alt="EssentialIconssendI211"
                    className={styles['essential-iconssend']}
                  />
                  <span
                    className={` ${styles['text121']} ${projectStyles['body-regular-body3']} `}
                  >
                    <span>Your email address</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['frame36']}>
          <div className={styles['group2228']}>
            <div className={styles['heading-name']}>
              <div className={styles['headermenu-default']}>
                <span
                  className={` ${styles['text123']} ${projectStyles['body-medium-body2']} `}
                >
                  <span>Home</span>
                </span>
              </div>
              <div className={styles['menu-item-default']}>
                <span
                  className={` ${styles['text125']} ${projectStyles['body-regular-body2']} `}
                >
                  <span>Service</span>
                </span>
              </div>
              <div className={styles['menu-item-default1']}>
                <span
                  className={` ${styles['text127']} ${projectStyles['body-regular-body2']} `}
                >
                  <span>Feature</span>
                </span>
              </div>
              <div className={styles['menu-item-default2']}>
                <span
                  className={` ${styles['text129']} ${projectStyles['body-regular-body2']} `}
                >
                  <span>Product</span>
                </span>
              </div>
              <div className={styles['menu-item-default3']}>
                <span
                  className={` ${styles['text131']} ${projectStyles['body-regular-body2']} `}
                >
                  <span>Testimonial</span>
                </span>
              </div>
              <div className={styles['menu-item-default4']}>
                <span
                  className={` ${styles['text133']} ${projectStyles['body-regular-body2']} `}
                >
                  <span>FAQ</span>
                </span>
              </div>
            </div>
          </div>
          <img
            src="/logo2139-ftul.svg"
            alt="Logo2139"
            className={styles['logo27']}
          />
          <div className={styles['login']}>
            <button className={styles['button4']}>
              <span
                className={` ${styles['text135']} ${projectStyles['label-medium-label']} `}
              >
                <span>Login</span>
              </span>
            </button>
            <button className={styles['button5']}>
              <span
                className={` ${styles['text137']} ${projectStyles['label-medium-label']} `}
              >
                <span>Sign up</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
