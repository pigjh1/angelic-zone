<template>
    <section id="profile" class="profile">
        <div class="l-wrap">
            <h2>Profile</h2>

            <div class="list">
                <h3>About Me</h3>
                <p class="greeting">후회 없는 삶</p>
                <p>
                    아기자기하고 감성적인 디자인 문구류를 좋아하고, 엽서를 수집하고, 커피 마시는걸 즐기고,<br />
                    일본작가 이사카 코타로를 엄청 좋아하며, 사진 찍는걸 좋아하는,<br />
                    웹사이트 제작을 직업으로 먹고 살고 있는 평범한 이 시대의 여성,<br />
                </p>
            </div>

            <div class="list">
                <h3>Personal Information</h3>
                <dl>
                    <dt>성별</dt>
                    <dd>여자</dd>
                </dl>
                <dl>
                    <dt>생년월일</dt>
                    <dd>1988.03.31</dd>
                </dl>
                <dl>
                    <dt>혈액형</dt>
                    <dd>O형</dd>
                </dl>
                <dl>
                    <dt>거주지</dt>
                    <dd>경기 광명시</dd>
                </dl>
            </div>

            <div class="list">
                <h3>Education &amp; Career</h3>
                <dl>
                    <dt>2016.04~현재</dt>
                    <dd>이롭게 UILab Front-end Developer</dd>
                </dl>
                <dl>
                    <dt>2012.06~2015.11</dt>
                    <dd>모션아이 퍼블리싱팀 Publisher, UI Developer</dd>
                </dl>
                <dl>
                    <dt>2010.04~2011.12</dt>
                    <dd>다온메이트 기술연구소 Web Developer</dd>
                </dl>
                <dl>
                    <dt>2017~현재</dt>
                    <dd>서울디지털대학교 컴퓨터 공학과 재학</dd>
                </dl>
                <dl>
                    <dt>2008</dt>
                    <dd>안양과학대학 웹콘텐츠 전공 졸업</dd>
                </dl>
                <dl>
                    <dt>2006</dt>
                    <dd>광명고등학교 졸업</dd>
                </dl>
            </div>

            <div class="list">
                <h3>Community</h3>
                <dl>
                    <dt>2008.08~현재</dt>
                    <dd>이사카 코타로 팬카페 및 홈페이지 운영</dd>
                </dl>
                <dl>
                    <dt>2014</dt>
                    <dd>웹접근성지킴이 3기 활동</dd>
                </dl>
                <dl>
                    <dt>2013</dt>
                    <dd>웹접근성지킴이 2기 활동</dd>
                </dl>
                <dl>
                    <dt>2010.07</dt>
                    <dd>로모그래피 코리아 커뮤니티 베타테스트</dd>
                </dl>
                <dl>
                    <dt>2010.01</dt>
                    <dd>삼성카메라 PL150 블루그래퍼 (이미지로거)</dd>
                </dl>
                <dl>
                    <dt>2009.09</dt>
                    <dd>로모그래피 다이아니미니 공식 리뷰</dd>
                </dl>
                <dl>
                    <dt>2008.06</dt>
                    <dd>다음 검색 ChangeUp 프로젝트 실험단</dd>
                </dl>
                <dl>
                    <dt>2004.10~2013.12</dt>
                    <dd>네이버 블로그 운영</dd>
                </dl>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.profile {
    background: #28a68d;

    h3 {
        color: #1a5c51;
    }
    .greeting {
        font-size: 1.3em;
        margin: 5px 0 15px;
        span {
            font-size: 0.75em;
        }
    }
    .list {
        display: block;
        position: relative;
        width: 100%;
        overflow: hidden;
        padding: 2em 0;
        border-bottom: 1px dashed #2d7065;

        &:last-child {
            border-bottom: 0;
        }
        a {
            font-size: 12px;
        }
        p {
            padding: 0 20px;
        }
        dl {
            padding: 0 20px;
            line-height: 1.8em;
        }
        dt {
            float: left;
            width: 15%;
            padding: 2px 0;
            font-weight: bold;
            color: #cde9e4;
        }
        dd {
            float: left;
            width: 85%;
            padding: 2px 0;
        }
    }
}

@media all and (max-width: 768px) {
    .profile .list {
        dt, dd {
            width: 100%;
        }
    }
}
</style>
