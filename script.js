

let images = [
    "https://images.unsplash.com/photo-1537806899329-543d299330a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MjR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1688884886438-502059ec4028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MjR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MjV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1508369233466-42c2fade18db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MjV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1627419042683-8e71c77186a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MjV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1673322882205-add3ff85764b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MjZ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1495552665515-46e119a10545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MjZ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MjZ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1528222354212-a29573cdb844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4Mjd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1673322882205-add3ff85764b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4Mjd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1555819206-7b30da4f1506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4Mjd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1620495111463-dba76e000e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4Mjh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1735867186727-31e455b53854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4Mjh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1584771306717-46df98d219f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4Mjl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1526746323784-6bc814d79273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4Mjl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1699984672759-7b1681f08c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1552591794-cf408c454609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1587428598020-9ecf13caec01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1520856847093-f467979e7885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1537806899329-543d299330a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1594171330477-5b41410e4b75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1647695002626-c0d7b6a15339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1472162314594-eca3c3d90df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1526746323784-6bc814d79273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzN8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1663095422042-f3752dc60e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzN8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1499652848871-1527a310b13a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1519915734606-32d972e3b9b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1620955206348-a6835f8e383a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1528696419473-a6cf5e84e1c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1620175406441-1355276b45e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ4MzZ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1725396708521-d0b22442a656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ5MDh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1536126750180-3c7d59643f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ5MDh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1515616227676-603a1c547b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ5MDh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1519915734606-32d972e3b9b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ5MDl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1530688957198-8570b1819eeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ5MDl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1458588540036-39028c41de9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ5MDl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1527521423398-0c0d6b6dfdd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ5MTB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1673322880837-80931e6e9e2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ5MTB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1575883147621-d20c567ed5ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ5MTB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1693728551903-90f013c5f25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ5MTF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1616718225664-6e607d394bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ5MTF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1565085592250-a7ea0c3a8a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ5MTJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1565085592250-a7ea0c3a8a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ5MTJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1646914489141-b0afd0779372?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzQ5MTJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1519511553349-1a39df983373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1535440216424-0e374e613ee5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1517596478640-f9362df4806e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1479107574602-b42882f52baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1614273662376-29d8ce44b829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1555819206-7b30da4f1506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1555817132-c5ec1afbd2a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1576437811038-f649ef9268ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1699984672759-7b1681f08c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1527521423398-0c0d6b6dfdd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1458588540036-39028c41de9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1534865751950-752428e42239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1485808269728-77bb07c059a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1574895954820-362f465e10be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1560403055-79a7c59145c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1562701903-c2095e99251f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1584771306717-46df98d219f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1484973768669-7fb6b5451095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1507692049790-de58290a4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMTl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1447619297994-b829cc1ab44a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMjB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1475938231793-3473b709268a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMjB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1655745637842-d36a0901c82c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMjB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1620955206348-a6835f8e383a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMjF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1442115597578-2d0fb2413734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMjF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1474367658825-e5858839e99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMjF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1517837016564-bfc3ffd67455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMjJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1497621122273-f5cfb6065c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMjJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1517837016564-bfc3ffd67455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMjJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1594856707747-31c40c2c445c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3NzYzMjN8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1656110075036-3a66f0946684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NTh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1479741789870-7e3f31a2ed07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NTl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NjB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1534865751950-752428e42239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NjB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1699984672759-7b1681f08c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NjF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1640224936356-d37fe428d4f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NjJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1473993702977-1706a7f23164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NjN8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1475938231793-3473b709268a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NjR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1517837016564-bfc3ffd67455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NjR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1472162314594-eca3c3d90df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NjV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NjZ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1652879244343-262ca9c8671f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4Njd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1648365899437-b3b577758264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4Njd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4Njh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1483043012503-8a8849b4c949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4Njl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NzB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1616718092429-e9024ad23063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NzF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1586210477741-f3d7dc250c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NzJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1534865751950-752428e42239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NzJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1620175406429-0830ddfec9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NzN8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1458588540036-39028c41de9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NzR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1646914489141-b0afd0779372?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NzV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NzV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1515616227676-603a1c547b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4NzZ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1630467253785-90f6c2f16e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4Nzd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1646793390836-7169dbb8254a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4Nzh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1473508476344-269a87b502ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4Nzh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1620955206348-a6835f8e383a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4Nzl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1600019246943-365d59651ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4ODB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1636228492530-87c1f10f4b9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4ODF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1649514829293-72adbf5425c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4ODJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1640266118314-87618634611b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4ODN8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1492052722242-2554d0e99e3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4ODN8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1469228252629-cbe7cb7db2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4ODR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1527613167274-502a5607f1cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4ODV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1447619297994-b829cc1ab44a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4ODV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1628257229411-3e7c408aa18e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4ODZ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1528222354212-a29573cdb844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4ODd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1473122430480-d00e6dd25ba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4ODh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1508369233466-42c2fade18db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4ODl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1610072175222-14ff9b858f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4ODl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1655745637845-fee22d1089ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4OTB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1646793390836-7169dbb8254a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4OTF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4OTJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1652969758219-739545b36784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4OTJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1640351960775-f729700e7754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4OTN8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1565085592250-a7ea0c3a8a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTA3MDR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4OTR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1447619297994-b829cc1ab44a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4OTd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1640351960775-f729700e7754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4OTh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1666819552993-08d116b154f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4OTh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1447619297994-b829cc1ab44a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg4OTl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1614273662376-29d8ce44b829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MDB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1457139621581-298d1801c832?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MDF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1688884886438-502059ec4028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MDJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1575883147621-d20c567ed5ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MDJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1581447109200-bf2769116351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MDN8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1508369233466-42c2fade18db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MDV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1520856847093-f467979e7885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MDZ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1506630391771-a4428d1e6bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MDd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1502837018495-1afe6b68114f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MDh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1473993702977-1706a7f23164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MDl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1661815324130-77f4eef9437f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MDl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1688884886438-502059ec4028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MTB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1517596478640-f9362df4806e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MTF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1636228492530-87c1f10f4b9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MTJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1672638224571-9af5104f4755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MTJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1527521423398-0c0d6b6dfdd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MTN8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MTR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1495552665515-46e119a10545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MTV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1640724984776-9f93f3d63aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MTZ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1657205394737-a1d144173fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MTd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1475938231793-3473b709268a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MTd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1457139621581-298d1801c832?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MTh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1627419042683-8e71c77186a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MTl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1657205396093-cc762f684054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MjB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1473993702977-1706a7f23164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MjB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1528696419473-a6cf5e84e1c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MjF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1480388198291-d071e45ee9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MjJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1530688957198-8570b1819eeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MjN8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1693728551903-90f013c5f25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MjR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1693728551903-90f013c5f25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MjR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1630467253785-90f6c2f16e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MjV8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1647695002626-c0d7b6a15339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MjZ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1662255392478-50a229294a5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5Mjd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5Mjd8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1584771305783-3ceb24b3f1d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5Mjh8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1555817128-342e1c8b3101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5Mjl8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1476018040064-32e98fec7648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MzB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1663623220547-28c1bd7f4242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MzB8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1519915734606-32d972e3b9b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MzF8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1520856847093-f467979e7885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MzJ8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1649514829112-27f81536361d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MzN8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1655745637842-d36a0901c82c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MzN8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1527649144814-b7d57216058c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MzR8&ixlib=rb-4.0.3&q=80&w=1080",
    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDYyMTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk4NDg5MzV8&ixlib=rb-4.0.3&q=80&w=1080",
]

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 优化后的内容加载
async function loadContent() {
    try {
        // 设置图片源并移除加载状态
        document.getElementById('image1').src = images[randomInt(0, images.length - 1)];

        // 移除加载提示
        document.querySelectorAll('.prayer-image').forEach(img => {
            img.style.background = 'none';
            img.style.position = 'static';
        });

        const bibleResponse = await fetch('https://bible-api.com/?random=verse');
        const bibleData = await bibleResponse.json();
        document.getElementById('verse-text').textContent = bibleData.text;
        document.getElementById('verse-reference').textContent =
            `${bibleData.reference} (${bibleData.translation_name})`;
    } catch (error) {
        console.error('Load Fail:', error);
        document.getElementById('verse-text').textContent = "Daily scripture: Rest and know that I am God! (Psalm 46:10)";
    }
}

// 优化按钮生成
const moods = ['Peace', 'Joy', 'Hope', 'Strength', 'Faith', 'Love', 'Patience', 'Gratitude'];
document.getElementById('buttons').innerHTML = moods.map((mood, index) => `
    <button class="mood-btn ${mood.toLowerCase()}" onclick="loadMoodContent('${mood}')">
        ${mood}
    </button>
`).join('');

// 新增跳转函数
function loadMoodContent(mood) {
    if (mood === 'Peace') {
        window.location.href = 'peace.html';
    }
    if (mood === 'Faith') {
        window.location.href = 'faith.html';
    }
    if (mood === 'Hope') {
        window.location.href = 'hope.html';
    }
    if (mood === 'Joy') {
        window.location.href = 'joy.html';
    }
    if (mood === 'Love') {
        window.location.href = 'love.html';
    }
    if (mood === 'Patience') {
        window.location.href = 'patience.html';
    }
    if (mood === 'Peace') {
        window.location.href = 'peace.html';
    }
    if (mood === 'Strength') {
        window.location.href = 'strength.html';
    }
    if (mood === 'Gratitude') {
        window.location.href = 'gratitude.html';
    }
    // 这里可以添加其他心情的跳转逻辑
}

// 优化聊天功能
function addMessage(role, message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value;
    if (message) {
        addMessage('user', message);
        userInput.value = '';
        // 这里可以添加发送消息到服务器等逻辑
        // 示例：发送一个简单的回复
        setTimeout(() => {
            addMessage('bot', 'This is a sample response.');
        }, 500);
    }
}

// 替换为colseAI API配置
const OPENAI_API_KEY = 'sk-IUYPsehop8h6LrToXU76ymyCpvJ55SUp4RjJ4AqTBYFu9A5V';
const OPENAI_API_URL = 'https://api.openai-proxy.org/v1/chat/completions';

async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    addMessage('user', userInput);
    document.getElementById('user-input').value = '';

    try {
        const response = await fetch(OPENAI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "system",
                    content: "You are a Christian prayer assistant, answer questions in English with Bible verses"
                }, {
                    role: "user",
                    content: userInput
                }]
            })
        });

        const data = await response.json();
        const botMessage = data.choices[0].message.content;
        addMessage('bot', botMessage);
    } catch (error) {
        console.error('Error:', error);
        addMessage('bot', 'The service is temporarily unavailable, please try again later');
    }
}

// 初始化加载
loadContent();