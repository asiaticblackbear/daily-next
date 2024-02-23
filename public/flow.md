workflow

````mermaid
flowchart LR
    home(메인화면)
    appbar[상단바]
        appbarFn1[메뉴]
        appbarFn2[우리동네]
        appbarFn3[사용자정보]
    advertise[주요 정책, 홍보]
    list(지역별 후보)
    home --- appbar -.- appbarFn1
    appbar -.- appbarFn2
    appbar -.- appbarFn3

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