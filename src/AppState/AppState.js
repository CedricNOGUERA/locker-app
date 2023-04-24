import React, {useState, useEffect} from "react";
import AppNavigation from "../AppNavigation/AppNavigation";


export default function AppState() {

  const bookingSlot = [
    {
      id: "654",
      lockerId: "987", //fKey
      companyId: "321", //fKey
      temperatureZone: [
        {
          id:"321",
          name: "sec",
          countIn: 2,
          bookingCount: 10,
        },
        {
          id:"221",
          name: "frais",
          countIn: 4,
          bookingCount: 15,
        },
        {
          id:"121",
          name: "surgele",
          countIn: 1,
          bookingCount: 5,
        }
      ]

    }
  ]

  const company =[
    {
      
    }
  ]

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

    const commandeTest = {
      "@context": "/api/contexts/Order",
      "@id": "/api/orders",
      "@type": "hydra:Collection",
      "hydra:member": [
          {
              "@id": "/api/orders/2",
              "@type": "Order",
              "id": 2,
              "barcode": "company-test-01-QNJURNU3",
              "receiveCode": 782845822,
              "status": "reminder",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-11T12:01:33-10:00",
              "updatedAt": "2023-04-13T16:56:52-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/1",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T09:40:32-10:00"
                  },
                  {
                      "@id": "/api/order_histories/2",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T09:44:31-10:00"
                  },
                  {
                      "@id": "/api/order_histories/3",
                      "@type": "OrderHistory",
                      "status": "operout",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T09:45:59-10:00"
                  },
                  {
                      "@id": "/api/order_histories/4",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T09:53:01-10:00"
                  },
                  {
                      "@id": "/api/order_histories/5",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T10:41:32-10:00"
                  },
                  {
                      "@id": "/api/order_histories/8",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T10:47:37-10:00"
                  },
                  {
                      "@id": "/api/order_histories/12",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T10:59:26-10:00"
                  },
                  {
                      "@id": "/api/order_histories/17",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T12:04:28-10:00"
                  },
                  {
                      "@id": "/api/order_histories/22",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T13:06:11-10:00"
                  },
                  {
                      "@id": "/api/order_histories/28",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-13T16:56:52-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/3",
              "@type": "Order",
              "id": 3,
              "barcode": "company-test-01-XDVZOLQ1",
              "receiveCode": 795776861,
              "status": "operout",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-11T12:07:07-10:00",
              "updatedAt": "2023-04-13T10:45:36-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/7",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T10:46:42-10:00"
                  },
                  {
                      "@id": "/api/order_histories/9",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T10:48:08-10:00"
                  },
                  {
                      "@id": "/api/order_histories/10",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T10:48:55-10:00"
                  },
                  {
                      "@id": "/api/order_histories/11",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T10:55:15-10:00"
                  },
                  {
                      "@id": "/api/order_histories/13",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T11:00:15-10:00"
                  },
                  {
                      "@id": "/api/order_histories/14",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T11:00:26-10:00"
                  },
                  {
                      "@id": "/api/order_histories/16",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T12:04:17-10:00"
                  },
                  {
                      "@id": "/api/order_histories/18",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T12:59:04-10:00"
                  },
                  {
                      "@id": "/api/order_histories/21",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T13:04:56-10:00"
                  },
                  {
                      "@id": "/api/order_histories/26",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-13T10:45:36-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/4",
              "@type": "Order",
              "id": 4,
              "barcode": "company-test-01-XDVZOLQ1",
              "receiveCode": 795776861,
              "status": "receive",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-11T12:07:37-10:00",
              "updatedAt": "2023-04-13T16:31:39-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/6",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T10:45:00-10:00"
                  },
                  {
                      "@id": "/api/order_histories/15",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T12:03:58-10:00"
                  },
                  {
                      "@id": "/api/order_histories/19",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T13:04:08-10:00"
                  },
                  {
                      "@id": "/api/order_histories/27",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-13T16:31:39-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/6",
              "@type": "Order",
              "id": 6,
              "barcode": "company-test-01-GRERBIN2",
              "receiveCode": 988267623,
              "status": "operout",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-11T15:14:27-10:00",
              "updatedAt": "2023-04-17T09:02:55-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/20",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T13:04:20-10:00"
                  },
                  {
                      "@id": "/api/order_histories/23",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T13:10:38-10:00"
                  },
                  {
                      "@id": "/api/order_histories/29",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-13T16:57:54-10:00"
                  },
                  {
                      "@id": "/api/order_histories/30",
                      "@type": "OrderHistory",
                      "status": "receive",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-13T16:58:19-10:00"
                  },
                  {
                      "@id": "/api/order_histories/35",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-17T09:02:55-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/7",
              "@type": "Order",
              "id": 7,
              "barcode": "company-test-01-WISHODR1",
              "receiveCode": 705787313,
              "status": "receive",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-12T11:37:11-10:00",
              "updatedAt": "2023-04-17T14:42:34-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/41",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-17T14:42:18-10:00"
                  },
                  {
                      "@id": "/api/order_histories/43",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-17T14:42:34-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/8",
              "@type": "Order",
              "id": 8,
              "barcode": "company-test-01-ZFJVOYP3",
              "receiveCode": 515236391,
              "status": "overtimedue",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-12T12:02:07-10:00",
              "updatedAt": "2023-04-13T16:59:10-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/31",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-13T16:59:10-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/9",
              "@type": "Order",
              "id": 9,
              "barcode": "company-test-01-KQCTSMS3",
              "receiveCode": 653004923,
              "status": "operout",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-12T13:02:15-10:00",
              "updatedAt": "2023-04-12T13:15:02-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/24",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T13:13:20-10:00"
                  },
                  {
                      "@id": "/api/order_histories/25",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-12T13:15:02-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/10",
              "@type": "Order",
              "id": 10,
              "barcode": "company-test-01-MJUWYJH5",
              "receiveCode": 375039452,
              "status": "overtime",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-12T13:16:23-10:00",
              "updatedAt": "2023-04-13T17:03:57-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/32",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-13T17:03:57-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/11",
              "@type": "Order",
              "id": 11,
              "barcode": "company-test-01-PMNUZGS4",
              "receiveCode": 400223683,
              "status": "left_for_customer_service",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-12T13:24:30-10:00",
              "updatedAt": "2023-04-13T17:05:15-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/33",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-13T17:05:15-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/12",
              "@type": "Order",
              "id": 12,
              "barcode": "company-test-01-KSYQKOF6",
              "receiveCode": 649022989,
              "status": "return",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-12T13:42:01-10:00",
              "updatedAt": "2023-04-13T17:05:52-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/34",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-13T17:05:52-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/13",
              "@type": "Order",
              "id": 13,
              "barcode": "company-test-01-NCTYPAI5",
              "receiveCode": 479280800,
              "status": "created",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-12T16:02:18-10:00",
              "updatedAt": "2023-04-12T16:02:18-10:00",
              "history": []
          },
          {
              "@id": "/api/orders/15",
              "@type": "Order",
              "id": 15,
              "barcode": "company-test-01-LSCHKZT1",
              "receiveCode": 583252981,
              "status": "created",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/7",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/6",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/5",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/2",
                              "@type": "Locker",
                              "type": 503,
                              "location": "Pacific Center - Allée de la galerie marchande",
                              "city": "Faa'a"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-13T13:49:16-10:00",
              "updatedAt": "2023-04-13T13:49:16-10:00",
              "history": []
          },
          {
              "@id": "/api/orders/16",
              "@type": "Order",
              "id": 16,
              "barcode": "company-test-01-UHNTEIC8",
              "receiveCode": 61737401,
              "status": "receive",
              "totalSlot": 2,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-13T16:16:45-10:00",
              "updatedAt": "2023-04-17T11:01:27-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/38",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-17T11:01:27-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/17",
              "@type": "Order",
              "id": 17,
              "barcode": "fare-rata-01-RHEMQ",
              "receiveCode": 123456,
              "status": "receive",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/50",
                  "@type": "User",
                  "username": "kpeterano",
                  "roles": [
                      "ROLE_SUPER_ADMIN",
                      "ROLE_USER"
                  ],
                  "firstName": "Kiehiva",
                  "lastName": "Peterano"
              },
              "updatedBy": {
                  "@id": "/api/users/50",
                  "@type": "User",
                  "username": "kpeterano",
                  "roles": [
                      "ROLE_SUPER_ADMIN",
                      "ROLE_USER"
                  ],
                  "firstName": "Kiehiva",
                  "lastName": "Peterano"
              },
              "createdAt": "2023-04-17T10:33:59-10:00",
              "updatedAt": "2023-04-17T11:00:53-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/36",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/50",
                          "@type": "User",
                          "username": "kpeterano",
                          "roles": [
                              "ROLE_SUPER_ADMIN",
                              "ROLE_USER"
                          ],
                          "firstName": "Kiehiva",
                          "lastName": "Peterano"
                      },
                      "updatedAt": "2023-04-17T11:00:53-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/18",
              "@type": "Order",
              "id": 18,
              "barcode": "company-test-01-RKUCWYQ9",
              "receiveCode": 64987370,
              "status": "receive",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-17T10:36:12-10:00",
              "updatedAt": "2023-04-17T11:01:02-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/37",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-17T11:01:02-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/19",
              "@type": "Order",
              "id": 19,
              "barcode": "company-test-01-YEMGHEP1",
              "receiveCode": 95040920,
              "status": "operin",
              "totalSlot": 2,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-17T10:41:26-10:00",
              "updatedAt": "2023-04-17T14:42:24-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/42",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-17T14:42:24-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/20",
              "@type": "Order",
              "id": 20,
              "barcode": "company-test-01-HFNCMTX1",
              "receiveCode": 45669541,
              "status": "created",
              "totalSlot": 2,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-17T11:02:59-10:00",
              "updatedAt": "2023-04-17T11:02:59-10:00",
              "history": []
          },
          {
              "@id": "/api/orders/21",
              "@type": "Order",
              "id": 21,
              "barcode": "company-test-01-HFNCMTX2",
              "receiveCode": 45669541,
              "status": "receive",
              "totalSlot": 2,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-17T11:03:00-10:00",
              "updatedAt": "2023-04-17T14:41:53-10:00",
              "history": [
                  {
                      "@id": "/api/order_histories/39",
                      "@type": "OrderHistory",
                      "status": "created",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-17T13:16:34-10:00"
                  },
                  {
                      "@id": "/api/order_histories/40",
                      "@type": "OrderHistory",
                      "status": "operin",
                      "updatedBy": {
                          "@id": "/api/users/51",
                          "@type": "User",
                          "username": "cedric.noguera",
                          "roles": [
                              "ROLE_DELIVERER",
                              "ROLE_USER"
                          ],
                          "firstName": "Cédric",
                          "lastName": "Noguera"
                      },
                      "updatedAt": "2023-04-17T14:41:53-10:00"
                  }
              ]
          },
          {
              "@id": "/api/orders/23",
              "@type": "Order",
              "id": 23,
              "barcode": "company-test-01-MXQXNGV1",
              "receiveCode": 40894206,
              "status": "created",
              "totalSlot": 2,
              "bookingSlot": {
                  "@id": "/api/booking_slots/8",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/4",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/3",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/2",
                              "@type": "Locker",
                              "type": 503,
                              "location": "Pacific Center - Allée de la galerie marchande",
                              "city": "Faa'a"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/52",
                  "@type": "User",
                  "username": "gilles.doe",
                  "roles": [
                      "ROLE_ADMIN",
                      "ROLE_USER"
                  ],
                  "firstName": "Gilles",
                  "lastName": "Doe"
              },
              "updatedBy": {
                  "@id": "/api/users/52",
                  "@type": "User",
                  "username": "gilles.doe",
                  "roles": [
                      "ROLE_ADMIN",
                      "ROLE_USER"
                  ],
                  "firstName": "Gilles",
                  "lastName": "Doe"
              },
              "createdAt": "2023-04-17T14:13:16-10:00",
              "updatedAt": "2023-04-17T14:13:16-10:00",
              "history": []
          },
          {
              "@id": "/api/orders/24",
              "@type": "Order",
              "id": 24,
              "barcode": "company-test-01-MXQXNGV2",
              "receiveCode": 40894206,
              "status": "created",
              "totalSlot": 2,
              "bookingSlot": {
                  "@id": "/api/booking_slots/8",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/4",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/3",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/2",
                              "@type": "Locker",
                              "type": 503,
                              "location": "Pacific Center - Allée de la galerie marchande",
                              "city": "Faa'a"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/52",
                  "@type": "User",
                  "username": "gilles.doe",
                  "roles": [
                      "ROLE_ADMIN",
                      "ROLE_USER"
                  ],
                  "firstName": "Gilles",
                  "lastName": "Doe"
              },
              "updatedBy": {
                  "@id": "/api/users/52",
                  "@type": "User",
                  "username": "gilles.doe",
                  "roles": [
                      "ROLE_ADMIN",
                      "ROLE_USER"
                  ],
                  "firstName": "Gilles",
                  "lastName": "Doe"
              },
              "createdAt": "2023-04-17T14:13:17-10:00",
              "updatedAt": "2023-04-17T14:13:17-10:00",
              "history": []
          },
          {
              "@id": "/api/orders/25",
              "@type": "Order",
              "id": 25,
              "barcode": "undefined-HCSICGH9",
              "receiveCode": 89446671,
              "status": "created",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-17T14:31:35-10:00",
              "updatedAt": "2023-04-17T14:31:35-10:00",
              "history": []
          },
          {
              "@id": "/api/orders/26",
              "@type": "Order",
              "id": 26,
              "barcode": "Media Nui-IAGTJGR9",
              "receiveCode": 70323980,
              "status": "created",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-18T09:27:29-10:00",
              "updatedAt": "2023-04-18T09:27:29-10:00",
              "history": []
          },
          {
              "@id": "/api/orders/27",
              "@type": "Order",
              "id": 27,
              "barcode": "Media Nui-VHOIQOW4",
              "receiveCode": 71002482,
              "status": "created",
              "totalSlot": 1,
              "bookingSlot": {
                  "@id": "/api/booking_slots/4",
                  "@type": "BookingSlot",
                  "slot": {
                      "@id": "/api/slots/1",
                      "@type": "Slot",
                      "temperatureZone": {
                          "@id": "/api/temperature_zones/1",
                          "@type": "TemperatureZone",
                          "locker": {
                              "@id": "/api/lockers/1",
                              "@type": "Locker",
                              "type": 501,
                              "location": "Parking Carrefour Punaauia",
                              "city": "Punaauia"
                          }
                      }
                  },
                  "company": {
                      "@id": "/api/companies/50",
                      "@type": "Company",
                      "name": "Media Nui"
                  }
              },
              "createdBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "updatedBy": {
                  "@id": "/api/users/51",
                  "@type": "User",
                  "username": "cedric.noguera",
                  "roles": [
                      "ROLE_DELIVERER",
                      "ROLE_USER"
                  ],
                  "firstName": "Cédric",
                  "lastName": "Noguera"
              },
              "createdAt": "2023-04-18T09:29:48-10:00",
              "updatedAt": "2023-04-18T09:29:48-10:00",
              "history": []
          }
      ],
      "hydra:totalItems": 23,
      "hydra:search": {
          "@type": "hydra:IriTemplate",
          "hydra:template": "/api/orders{?status,status[],bookingSlot.slot.temperatureZone.locker.location,bookingSlot.slot.temperatureZone.locker.location[]}",
          "hydra:variableRepresentation": "BasicRepresentation",
          "hydra:mapping": [
              {
                  "@type": "IriTemplateMapping",
                  "variable": "status",
                  "property": "status",
                  "required": false
              },
              {
                  "@type": "IriTemplateMapping",
                  "variable": "status[]",
                  "property": "status",
                  "required": false
              },
              {
                  "@type": "IriTemplateMapping",
                  "variable": "bookingSlot.slot.temperatureZone.locker.location",
                  "property": "bookingSlot.slot.temperatureZone.locker.location",
                  "required": false
              },
              {
                  "@type": "IriTemplateMapping",
                  "variable": "bookingSlot.slot.temperatureZone.locker.location[]",
                  "property": "bookingSlot.slot.temperatureZone.locker.location",
                  "required": false
              }
          ]
      }
  }
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
    const [filteredUserData, setFilteredUserData] = useState([]);
    const [test, setTest] = useState([]);

 
    const [selectedStore, setSelectedStore] = useState();
    const [selectedOrderCity, setSelectedOrderCity] = useState();
    const [isLogged, setIsLogged] = useState(false);
    const [token, setToken] = useState('')
    const [allSlot, setAllSlot] = useState([])


    const [modalVisible, setModalVisible] = useState(false)



    const AppStates = {
        commandes,
        selectedStore,
        setSelectedStore,
        deliveryPoint,
        orderData, 
        setOrderData,
        isLogged, 
        setIsLogged,
        filteredUserData, 
        setFilteredUserData,
        test, setTest,
        token, setToken,
        allSlot, setAllSlot,
        selectedOrderCity, setSelectedOrderCity,
        modalVisible, setModalVisible
        
    }

    useEffect(() => {
        
        setOrderData(commandes)
        setDeliveryPoint(deliveryPoints)
    }, []);

    return <AppNavigation AppStates={AppStates} />


}