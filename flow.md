# 모두의 방구석 정치 www.bannggu.com 

## key point

* 주거지역별 의원 정보 (웹인 경우에는 2줄로 비교 가능하도록 화면 기획)
* 의원별 역대 이력 
* 본인의 공약사항 이행 현황
* 상대 비교하기 쉬운 화면 디자인 도입
    

    code block

ㅇ



## workflow

표현요소 [화면], (컴포넌트), ---연결, -.-구성
````mermaid
flowchart LR
    
    home(메인화면)
    appbar[상단바]
        appbarLocate[우리동네]
        appbarMenu[메뉴]
        
    
    advertise[동네 인기 의원, 주요 정책, 홍보]
    list[지역별 후보]
    

    home --- appbar
    home --- advertise
    home --- list
    appbar -.- appbarLocate
    appbar -.- appbarMenu
    
    home --> user
    list --> member
    
    member(의원)
    
    user(사용자)
    
    subgraph "공공데이터"
        direction BT
        data2[중앙선거관리위원회 선거공약정보]
        data3[중앙선거관리위원회 후보자 정보]
    end
    
    subgraph "열린국회"
        direction BT
        data1[국회의원 발의법률안]
    end

````



