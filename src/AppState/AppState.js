import React, {useState, useEffect} from "react";
import AppNavigation from "../AppNavigation/AppNavigation";


export default function AppState() {

    const commandes = [
        {
        "id": "980-498-409",
        "location": "Punaauia",
        "orderNum": "212-xiom-441",
        "temp" : [{"icon": "dry",
                "name": "sec"}],
        "numbContainer" : 1,
        "firstNameCustom": "Jordan",
        "LastNameCustom": "Mickael",
        "detailOrder": [{
        }],
        "status": "inProgress",
        },
        {
        "id": "980-498-410",
        "location": "Punaauia",
        "orderNum": "547-xfz-842 ",
        "temp" : [{"icon": "organic-food",
                "name": "frais"}, {"icon": "dry",
                "name": "sec"}],
        "numbContainer" : 2,
        "firstNameCustom": "Jordan",
        "LastNameCustom": "Mickael",
        "detailOrder": [{
        }],
        "status": "inProgress"
        },
        {
        "id": "980-498-454",
        "location": "Faa'a",
        "orderNum": "780-xgz-200 ",
        "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
        "numbContainer" : 3,
        "firstNameCustom": "Jordan",
        "LastNameCustom": "Mickael",
        "detailOrder": [{
        }],
        "status": "inProgress",
        },
        {
            "id": "980-498-654",
            "location": "Arue",
        "orderNum": "212-abc-843 ",
            "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "inProgress",
            },
        {
            "id": "980-498-258",
            "location": "Faa'a",
        "orderNum": "557-frz-823 ",
            "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "inProgress",
        },
        {
            "id": "980-478-222",
            "location": "Arue",
        "orderNum": "212-aze-848 ",
            "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "inProgress",
        }
        ,
        {
            "id": "741-gbtb82282",
            "location": "Punaauia",
        "orderNum": "542-xgz-873 ",
            "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "inProgress",
        }
        ,
        {
            "id": "987-asd-674",
            "location": "Punaauia",
        "orderNum": "552-xgz-896",
            "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "inProgress",
        }
        ,
        {
            "id": "987-bsd-754",
            "location": "Punaauia",
        "orderNum": "872-xgz-865",
            "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "inProgress",
        }
        ,
        {
            "id": "987-csd-659",
            "location": "Punaauia",
        "orderNum": "574-xgz-849",
            "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "inProgress",
        }
        ,
        {
            "id": "987-dsd-604",
            "location": "Punaauia",
        "orderNum": "657-xgz-873 ",
            "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "inProgress",
        }
        ,
        {
            "id": "987-esd-254",
            "location": "Punaauia",
        "orderNum": "582-xgz-147",
            "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "toRetrieve",
        }
        ,
        {
            "id": "587-fsd-654",
            "location": "Punaauia",
        "orderNum": "582-xgz-741",
            "temp" : [{"icon": "winter",
                "name": "surgelé"}, {"icon": "dry",
                "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "toRetrieve",
        }
        ,
        {
            "id": "687-fsd-654",
            "location": "Punaauia",
        "orderNum": "582-xgz-846",
            "temp" : [{"icon": "organic-food",
                "name": "frais"}, {"icon": "dry",
                "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "toRetrieve",
        }
        ,
        {
            "id": "927-fld-654",
            "location": "Punaauia",
        "orderNum": "582-xgz-847",
            "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "toRetrieve",
        }
        ,
        {
            "id": "487-hjd-258",
            "location": "Punaauia",
        "orderNum": "582-xgz-854",
            "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "toRetrieve",
        }
        ,
        {
            "id": "117-fop-649",
            "location": "Punaauia",
        "orderNum": "572-xsz-848 ",
            "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "delivered",
        }
        ,
        {
            "id": "117-fop-549",
            "location": "Punaauia",
        "orderNum": "582-xfz-838 ",
            "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "delivered",
        }
        ,
        {
            "id": "711-fom-140",
            "location": "Punaauia",
        "orderNum": "222-xgd-828 ",
            "temp" : [{"icon": "organic-food",
                "name": "frais"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "inProgress",
        }
        ,
        {
            "id": "211-pom-165",
            "location": "Punaauia",
        "orderNum": "222-xgd-848 ",
            "temp" : [{"icon": "winter",
                "name": "surgelé"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "inProgress",
        }
        ,
        {
            "id": "517-fem-149",
            "location": "Punaauia",
        "orderNum": "552-dez-829 ",
            "temp" : [{"icon": "winter",
                "name": "surgelé"}, {"icon": "dry",
                "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "inProgress",
        }
        ,
        {
            "id": "717-zam-149",
            "location": "Punaauia",
        "orderNum": "382-xoz-111 ",
            "temp" : [{"icon": "winter",
                 "name": "surgelé"},
                {"icon": "organic-food",
                "name": "frais"},
                {"icon": "dry",
            "name": "sec"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "inProgress",
        }
        ,
        {
            "id": "777-fom-219",
            "location": "Punaauia",
        "orderNum": "542-xrz-828 ",
            "temp" : [{"icon": "winter",
                "name": "surgelé"}, {"icon": "organic-food",
                "name": "frais"}],
            "numbContainer" : 3,
            "firstNameCustom": "Jordan",
            "LastNameCustom": "Mickael",
            "detailOrder": [{
            }],
        "status": "delivered",
        }
      
    ]
    const deliveryPoints = [
      {
        id: "125-lkj-783",
        key: "puna",
        name: "Punaauia",
        totalCapacity: [
          {
            id: "789-zef-456",
            zone: "sec",
            capacity: 50,
          },
          {
            id: "987-scf-487",
            zone: "frais",
            capacity: 50,
          },
          {
            id: "589sddf457",
            zone: "surgelé",
            capacity: 50,
          },
        ],
        Reserve: [
          {
            id: "298-poi-8191d",
            name: "zeclt",
            zones: [
             {
                id: "561-sec-723",
                zone: "sec",
                container: 10,
              },
              {
                id: "500-frais-526",
                zone: "frais",
                container: 10,
              },
              {
                id: "589sddf457",
                zone: "surgelé",
                container: 5,
              },
            ],
          },
          {
            id: "818-dd9-18191d",
            name: "zangiev",
            zones: [
              {
                id: "561-sec-723",
                zone: "sec",
                container: 2,
              },
              {
                id: "500-frais-526",
                zone: "frais",
                container: 8,
              },
              {
                id: "589sddf457",
                zone: "surgelé",
                container: 2,
              },
            ],
          },
        ],
      },

      {
        id: "123122",
        key: "arue",
        name: "Arue",
        totalCapacity: [
          {
            id: "789sf456",
            zone: "sec",
            capacity: 50,
          },
          {
            id: "789sf456",
            zone: "frais",
            capacity: 50,
          },
          {
            id: "589sddf457",
            zone: "surgelé",
            capacity: 50,
          },
        ],
        Reserve: [
          {
            id: "29818dd918191d",
            name: "zeclt",
            zones: [
             {
                id: "561-sec-723",
                zone: "sec",
                container: 10,
              },
              {
                id: "500-frais-526",
                zone: "frais",
                container: 10,
              },
              {
                id: "589sddf457",
                zone: "surgelé",
                container: 5,
              },
            ],
          },
          {
            id: "29818dd918191d",
            name: "zangiev",
            zones: [
             {
                id: "561-sec-723",
                zone: "sec",
                container: 2,
              },
              {
                id: "500-frais-526",
                zone: "frais",
                container: 8,
              },
              {
                id: "589sddf457",
                zone: "surgelé",
                container: 2,
              },
            ],
          },
        ],
      },

      {
        id: "123134",
        key: "faaa",
        name: "Faa'a",
        totalCapacity: [
          {
            id: "789sf456",
            zone: "sec",
            capacity: 50,
          },
          {
            id: "789sf456",
            zone: "frais",
            capacity: 50,
          },
          {
            id: "589sddf457",
            zone: "surgelé",
            capacity: 50,
          },
        ],
        Reserve: [
          {
            id: "29818dd918191d",
            name: "zeclt",
            zones: [
             {
                id: "561-sec-723",
                zone: "sec",
                container: 10,
              },
              {
                id: "500-frais-526",
                zone: "frais",
                container: 10,
              },
              {
                id: "589sddf457",
                zone: "surgelé",
                container: 5,
              },
            ],
          },
          {
            id: "29818dd918191d",
            name: "zangiev",
            zones: [
             {
                id: "561-sec-723",
                zone: "sec",
                container: 2,
              },
              {
                id: "500-frais-526",
                zone: "frais",
                container: 8,
              },
              {
                id: "589sddf457",
                zone: "surgelé",
                container: 2,
              },
            ],
          },
        ],
      },

      {
        id: "123555",
        key: "tara",
        name: "Taravao",
        totalCapacity: [
          {
            id: "789sf456",
            zone: "sec",
            capacity: 50,
          },
          {
            id: "789sf456",
            zone: "frais",
            capacity: 50,
          },
          {
            id: "589sddf457",
            zone: "surgelé",
            capacity: 50,
          },
        ],
        Reserve: [
          {
            id: "29818dd918191d",
            name: "zeclt",
            zones: [
             {
                id: "561-sec-723",
                zone: "sec",
                container: 10,
              },
              {
                id: "500-frais-526",
                zone: "frais",
                container: 10,
              },
              {
                id: "589sddf457",
                zone: "surgelé",
                container: 5,
              },
            ],
          },
          {
            id: "29818dd918191d",
            name: "zangiev",
            zones: [
             {
                id: "561-sec-723",
                zone: "sec",
                container: 2,
              },
              {
                id: "500-frais-526",
                zone: "frais",
                container: 8,
              },
              {
                id: "589sddf457",
                zone: "surgelé",
                container: 2,
              },
            ],
          },
        ],
      },
    ];
    const [orderData, setOrderData] = useState([]);
    const [deliveryPoint, setDeliveryPoint] = useState([]);

 
    const [selectedStore, setSelectedStore] = useState("Punaauia");

    const AppStates = {
        commandes,
        selectedStore,
        setSelectedStore,
        deliveryPoint,
        orderData, 
        setOrderData
    }

    useEffect(() => {
        
        setOrderData(commandes)
        setDeliveryPoint(deliveryPoints)
    }, []);

    return <AppNavigation AppStates={AppStates} />


}