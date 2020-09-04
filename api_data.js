define({ "api": [
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/organizationSecretLogs?oId=:organizationId&sId=:secretId&uId=:userId&s=:search&p=:page&pp=:perPage&f=:filter&sf=:sortField&so=:sortOrder&ds=:dateStart&de=:dateEnd",
    "title": "Organization's Audit Logs",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Manager"
      }
    ],
    "name": "GetOrganizationSecretLogs",
    "group": "Audit_Logs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "secretId",
            "description": "<p>Secret unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userId",
            "description": "<p>User unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search text.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>=0 Page index.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "perPage",
            "description": "<p>=25 Number of records per page.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "filter",
            "description": "<p>Predefined filters.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortField",
            "description": "<p>Sort field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"descend\"",
              "\"ascend\""
            ],
            "optional": true,
            "field": "sortOrder",
            "description": "<p>Sort order.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dateStart",
            "description": "<p>Date range start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dateEnd",
            "description": "<p>Date range end date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of records.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "logs",
            "description": "<p>Array of logs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"total\":1,\n    \"logs\":[\n        {\n            \"id\":\"22f3c9c9-8c74-4b0b-bf3d-09912991cbc2\",\n            \"logType\":\"access\",\n            \"eventUserId\":\"a62f28f1-bfed-48f4-81af-ef2dc4ed8ad0\",\n            \"eventUsername\":\"Bob Acme\",\n            \"secretId\":\"84ff5c42-d4f9-407b-96eb-e02b77cc2575\",\n            \"secretName\":\"New Secret\",\n            \"secretUserId\":\"a62f28f1-bfed-48f4-81af-ef2dc4ed8ad0\",\n            \"secretUsername\":\"Bob Acme\",\n            \"organizationId\":\"a7017390-3327-4bdc-a0a3-8bd4d4e044ac\",\n            \"errorMessage\":null,\n            \"errorCode\":0,\n            \"status\":\"200\",\n            \"method\":\"POST\",\n            \"ipAddress\":\"172.19.0.1\",\n            \"shardId\":\"22e4a2a4-5af0-4c41-ba8e-eb16e8478b05\",\n            \"transactionId\":\"2651a7e9-9a24-4483-9083-0bad25fd0770\",\n            \"timeTaken\":8,\n            \"description\":\"[172.19.0.1] succeeded in uploading a shard in 8ms.\",\n            \"createdDate\":\"2019-11-06T17:29:53.782Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/auditlogs/organizationSecretLogs.js",
    "groupTitle": "Audit_Logs"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/secretLogs?oId=:organizationId&sId=:secretId&uId=:userId&s=:search&p=:page&pp=:perPage&f=:filter&sf=:sortField&so=:sortOrder&ds=:dateStart&de=:dateEnd",
    "title": "Secret's Audit Logs",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Manager, User"
      }
    ],
    "name": "GetSecretLogs",
    "group": "Audit_Logs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secretId",
            "description": "<p>Secret unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userId",
            "description": "<p>User unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search text.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>=0 Page index.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "perPage",
            "description": "<p>=25 Number of records per page.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "filter",
            "description": "<p>Predefined filters.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortField",
            "description": "<p>Sort field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"descend\"",
              "\"ascend\""
            ],
            "optional": true,
            "field": "sortOrder",
            "description": "<p>Sort order.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dateStart",
            "description": "<p>Date range start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dateEnd",
            "description": "<p>Date range end date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of records.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "logs",
            "description": "<p>Array of logs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"total\":1,\n    \"logs\":[\n        {\n            \"id\":\"22f3c9c9-8c74-4b0b-bf3d-09912991cbc2\",\n            \"logType\":\"access\",\n            \"eventUserId\":\"a62f28f1-bfed-48f4-81af-ef2dc4ed8ad0\",\n            \"eventUsername\":\"Bob Acme\",\n            \"secretId\":\"84ff5c42-d4f9-407b-96eb-e02b77cc2575\",\n            \"secretName\":\"New Secret\",\n            \"secretUserId\":\"a62f28f1-bfed-48f4-81af-ef2dc4ed8ad0\",\n            \"secretUsername\":\"Bob Acme\",\n            \"organizationId\":\"a7017390-3327-4bdc-a0a3-8bd4d4e044ac\",\n            \"errorMessage\":null,\n            \"errorCode\":0,\n            \"status\":\"200\",\n            \"method\":\"POST\",\n            \"ipAddress\":\"172.19.0.1\",\n            \"shardId\":\"22e4a2a4-5af0-4c41-ba8e-eb16e8478b05\",\n            \"transactionId\":\"2651a7e9-9a24-4483-9083-0bad25fd0770\",\n            \"timeTaken\":8,\n            \"description\":\"[172.19.0.1] succeeded in uploading a shard in 8ms.\",\n            \"createdDate\":\"2019-11-06T17:29:53.782Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/auditlogs/secretLogs.js",
    "groupTitle": "Audit_Logs"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/userSecretLogs?oId=:organizationId&sId=:secretId&uId=:userId&s=:search&p=:page&pp=:perPage&f=:filter&sf=:sortField&so=:sortOrder&ds=:dateStart&de=:dateEnd",
    "title": "User's Audit Logs",
    "version": "0.1.0",
    "permission": [
      {
        "name": "User"
      }
    ],
    "name": "GetUserSecretLogs",
    "group": "Audit_Logs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "secretId",
            "description": "<p>Secret unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search text.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>=0 Page index.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "perPage",
            "description": "<p>=25 Number of records per page.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "filter",
            "description": "<p>Predefined filters.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortField",
            "description": "<p>Sort field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"descend\"",
              "\"ascend\""
            ],
            "optional": true,
            "field": "sortOrder",
            "description": "<p>Sort order.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dateStart",
            "description": "<p>Date range start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dateEnd",
            "description": "<p>Date range end date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of records.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "logs",
            "description": "<p>Array of logs.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"total\":1,\n    \"logs\":[\n        {\n            \"id\":\"22f3c9c9-8c74-4b0b-bf3d-09912991cbc2\",\n            \"logType\":\"access\",\n            \"eventUserId\":\"a62f28f1-bfed-48f4-81af-ef2dc4ed8ad0\",\n            \"eventUsername\":\"Bob Acme\",\n            \"secretId\":\"84ff5c42-d4f9-407b-96eb-e02b77cc2575\",\n            \"secretName\":\"New Secret\",\n            \"secretUserId\":\"a62f28f1-bfed-48f4-81af-ef2dc4ed8ad0\",\n            \"secretUsername\":\"Bob Acme\",\n            \"organizationId\":\"a7017390-3327-4bdc-a0a3-8bd4d4e044ac\",\n            \"errorMessage\":null,\n            \"errorCode\":0,\n            \"status\":\"200\",\n            \"method\":\"POST\",\n            \"ipAddress\":\"172.19.0.1\",\n            \"shardId\":\"22e4a2a4-5af0-4c41-ba8e-eb16e8478b05\",\n            \"transactionId\":\"2651a7e9-9a24-4483-9083-0bad25fd0770\",\n            \"timeTaken\":8,\n            \"description\":\"[172.19.0.1] succeeded in uploading a shard in 8ms.\",\n            \"createdDate\":\"2019-11-06T17:29:53.782Z\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/auditlogs/userSecretLogs.js",
    "groupTitle": "Audit_Logs"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "post",
    "url": "/organization/Create",
    "title": "Create an organization",
    "version": "0.1.0",
    "name": "CreateOrganization",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Organization name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminEmail",
            "description": "<p>Organization administrator email address.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Organization id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"id\": \"b9ad8087-ba86-471e-ab48-fb1ddd9d201b\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "services/src/domain/organization/commands/create.js",
    "groupTitle": "Organization"
  },
  {
    "type": "post",
    "url": "/organization/:organizationId/CreateSecret",
    "title": "Create a secret",
    "version": "0.1.1",
    "name": "CreateSecret",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Secret name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "numberOfShards",
            "description": "<p>The number of shards to create.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "requiresAuthentication",
            "description": "<p>Requires authentication to read the secret back?</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "expiresIn",
            "description": "<p>=0 The number of seconds the secret expires in.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "allowedIPs",
            "description": "<p>=[] IP Addresses allowed to access this secret.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "machineNames",
            "description": "<p>machine names allowed to access secret.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "regionName",
            "description": "<p>region allowed to access secret.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secretId",
            "description": "<p>Secret id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expiresOn",
            "description": "<p>When the secret expires.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "urls",
            "description": "<p>Shard storage locations.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"a7017390-3327-4bdc-a0a3-8bd4d4e044ac\",\n  \"secretId\": \"a0bce59c-d9ec-46d4-ad91-7299d94add4d\",\n  \"expiresOn\": null,\n  \"urls\": [\n    \"http://staging.judosecurity.com/store_1/shard/6cade55b-7a10-4691-a10f-fc6913cf1879\",\n    \"http://staging.judosecurity.com/store_2/shard/e75c2528-1f0b-4d4a-b053-c733efbc3c82\",\n    \"http://staging.judosecurity.com/store_3/shard/bffa0f06-d956-4869-9b30-7e7216b68c2e\",\n    \"http://staging.judosecurity.com/store_4/shard/ed396979-0c3b-4acd-a315-58424a94967a\",\n    \"http://staging.judosecurity.com/store_5/shard/b156964e-fa1e-43b1-8a20-53aad1af6d5c\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "services/src/domain/organization/commands/createSecret.js",
    "groupTitle": "Organization"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "post",
    "url": "/organization/:organizationId/Disable",
    "title": "Disable organization",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Judo System Admin"
      }
    ],
    "name": "DisableOrganization",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Organization id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"id\": \"b9ad8087-ba86-471e-ab48-fb1ddd9d201b\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "services/src/domain/organization/commands/disable.js",
    "groupTitle": "Organization"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/organizations/:organizationId",
    "title": "Get all Organizations / Get a organization's details",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Judo System Admin"
      }
    ],
    "name": "GetAllOrganizations_/_Get_Organization_Details_of_organization_by_Id",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "organizationId",
            "description": "<p>Unique Organization ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userMin",
            "description": "<p>Optional Minimum Users of each organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userMax",
            "description": "<p>Optional Maximum Users of each organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "secretMin",
            "description": "<p>Optional Minimum Secrets of each organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "secretMax",
            "description": "<p>Optional Maximum Secrets of each organization</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "status",
            "description": "<p>Optional Status of each organization</p>"
          },
          {
            "group": "Parameter",
            "type": "inviteDateStart",
            "optional": true,
            "field": "Date",
            "description": "<p>Optional Created Date Start of each organization</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Page index.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "perPage",
            "description": "<p>Number of records per page.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortField",
            "description": "<p>Sort field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"descend\"",
              "\"ascend\""
            ],
            "optional": true,
            "field": "sortOrder",
            "description": "<p>Sort order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "organizations",
            "description": "<p>Organization details.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n     \"id\": \"a74cbe17-85dc-421a-b80d-c66eae06cf86\",\n     \"name\": \"Ajmera Infotech\",\n     \"adminName\": \"Tejas\",\n     \"adminEmail\": \"tapan.chudasama@ajmerainfotech.com\",\n     \"status\": \"active\",\n     \"createdDate\": \"2020-07-25T09:33:44.000Z\"\n  },\n  {\n     \"id\": \"63e344d4-ab1b-410a-a651-bf2c7c36cb58\",\n     \"name\": \"Anonymous\",\n     \"adminName\": \"Anonymous admin\",\n     \"adminEmail\": \"cirdeberki@enayu.com\",\n     \"status\": \"active\",\n     \"createdDate\": \"2020-07-25T07:11:57.000Z\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/systemadmin/organizations.js",
    "groupTitle": "Organization"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/organizations/:organizationId",
    "title": "Organization Details",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Manager"
      }
    ],
    "name": "GetOrganization",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "organization",
            "description": "<p>Organization details.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"shard_regions\": [],\n  \"shard_providers\": [],\n  \"users\": [\n    {\n      \"id\": \"a62f28f1-bfed-48f4-81af-ef2dc4ed8ad0\",\n      \"username\": \"admin@acme.io\",\n      \"status\": \"active\",\n      \"profile\": {\n        \"name\": \"Bob Acme\",\n        \"phone\": \"930-992-9938\"\n      },\n      \"roles\": \"organizationAdmin\",\n      \"createDate\": \"2019-10-30T16:57:16.000Z\"\n    },\n    {\n      \"id\": \"017dc337-7566-47ea-9eb5-16dddbbafa4a\",\n      \"username\": \"jaison@acme.io\",\n      \"status\": \"active\",\n      \"profile\": {\n        \"name\": \"Jaison Green\",\n        \"phone\": \"939-993-9292\"\n      },\n      \"roles\": \"organizationMember\",\n      \"createDate\": \"2019-10-30T16:57:15.000Z\"\n    }\n  ],\n  \"id\": \"a7017390-3327-4bdc-a0a3-8bd4d4e044ac\",\n  \"name\": \"Acme Corporation\",\n  \"createdDate\": \"2019-10-30T16:57:15.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/manager/organizations.js",
    "groupTitle": "Organization"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "post",
    "url": "/organization/:organizationId/InviteUser",
    "title": "Invite a user",
    "version": "0.1.0",
    "name": "InviteUser",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User object.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user[email]",
            "description": "<p>User's email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user[role]",
            "description": "<p>User's role.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "user[profile]",
            "description": "<p>User profile object.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "profile[name]",
            "description": "<p>User name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"user\": {\n    \"email\": \"bob@email.com\",\n    \"profile\": {\n      \"name\": \"Bob Smith\"\n    },\n    \"role\": \"organizationMember\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Invite id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"id\": \"b9ad8087-ba86-471e-ab48-fb1ddd9d201b\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "services/src/domain/organization/commands/inviteUser.js",
    "groupTitle": "Organization"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "post",
    "url": "/organization/:organizationId/Update",
    "title": "Update organization",
    "version": "0.1.0",
    "name": "UpdateOrganization",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Organization name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "providers",
            "description": "<p>Organization providers.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "regions",
            "description": "<p>Organization regions.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Organization id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"id\": \"b9ad8087-ba86-471e-ab48-fb1ddd9d201b\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "services/src/domain/organization/commands/update.js",
    "groupTitle": "Organization"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "post",
    "url": "/organization/:organizationId/UpdateOrganizationDetails",
    "title": "Update organization Details",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Judo System Admin"
      }
    ],
    "name": "UpdateOrganizationDetails",
    "group": "Organization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Organization name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminName",
            "description": "<p>Admin Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adminEmail",
            "description": "<p>Admin Email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Organization id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"id\": \"b9ad8087-ba86-471e-ab48-fb1ddd9d201b\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "services/src/domain/organization/commands/updateOrganizationDetails.js",
    "groupTitle": "Organization"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/regioncities?countryCode=:countryCode",
    "title": "Regions",
    "version": "0.1.1",
    "permission": [
      {
        "name": "User"
      }
    ],
    "name": "GetRegions",
    "group": "Regions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>Country ISO Code.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "regions",
            "description": "<p>Country's regions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"geoname_id\": 4046230,\n    \"country_iso_code\": \"US\",\n    \"country_name\": \"United States\",\n    \"subdivision_1_iso_code\": \"TX\",\n    \"subdivision_1_name\": \"Texas\",\n    \"city_name\": \"Cherokee\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/manager/region_cities.js",
    "groupTitle": "Regions"
  },
  {
    "type": "post",
    "url": "/secret/:secretId/DeleteSecret",
    "title": "Delete a secret",
    "version": "0.1.0",
    "name": "DeleteSecret",
    "group": "Secret",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secretId",
            "description": "<p>Secret Id.</p>"
          }
        ]
      }
    },
    "filename": "services/src/domain/secret/commands/deleteSecret.js",
    "groupTitle": "Secret"
  },
  {
    "type": "post",
    "url": "/secret/:secretId/ExpireSecret",
    "title": "Expire a secret",
    "version": "0.1.0",
    "name": "ExpireSecret",
    "group": "Secret",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secretId",
            "description": "<p>Secret Id.</p>"
          }
        ]
      }
    },
    "filename": "services/src/domain/secret/commands/expireSecret.js",
    "groupTitle": "Secret"
  },
  {
    "type": "post",
    "url": "/secret/:secretId/FulfillSecret",
    "title": "Mark a secret as fulfilled",
    "version": "0.1.0",
    "name": "FulfillSecret",
    "group": "Secret",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secretId",
            "description": "<p>Secret Id.</p>"
          }
        ]
      }
    },
    "filename": "services/src/domain/secret/commands/fulfillSecret.js",
    "groupTitle": "Secret"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/organizations/?id=organizationId&page=page&perPage=perPage&sortField=sortField&sortOrder=sortOrder",
    "title": "Organization's Secrets",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Judo System Admin"
      }
    ],
    "name": "GetAllOrganizationSecrets",
    "group": "Secret",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Page index.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "perPage",
            "description": "<p>Number of records per page.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortField",
            "description": "<p>Sort field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"descend\"",
              "\"ascend\""
            ],
            "optional": true,
            "field": "sortOrder",
            "description": "<p>Sort order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "secrets",
            "description": "<p>Organization Secrets.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n\"secrets\": [\n    {\n        \"shardIds\": [\n            \"9724d55a-5a60-42ca-ae67-37ab237066d5\",\n            \"10b1c38c-979e-4b8d-8d03-86be0b379c44\",\n            \"669b749a-222c-4a8a-b596-fc2f89a0e376\",\n            \"4588b80d-f591-4cd2-a4cd-ffb603fc56db\",\n            \"20c21a7a-14a8-4ab2-b0d6-308b5274f8d3\"\n        ],\n        \"id\": \"84ed5720-141f-472c-84e5-60e304f037b3\",\n        \"description\": \"sasa\",\n        \"createdDate\": \"2020-08-18T10:58:21.000Z\",\n        \"organizationId\": \"4d7a287e-32b7-44fd-a005-0ed9f2bf03dc\",\n        \"userId\": \"fa820b47-c11d-4625-a134-16531bc2b8e9\",\n        \"policy\": {\n            \"policyId\": \"db0a8e35-b2c2-4edd-88f4-859842f06db7\",\n            \"requiresAuthentication\": true,\n            \"expiresOn\": null,\n            \"allowedIPs\": [],\n            \"machineNames\": [],\n            \"region\": {}\n        },\n        \"fulfilled\": true,\n        \"username\": \"Mukesh Ambani\"\n    },\n    {\n        \"shardIds\": [\n            \"4bfb1299-72cd-4e9b-95de-6a12ab1c5b60\",\n            \"46189bda-c60a-4a4a-a545-9851408066a5\",\n            \"a04b2ffc-4698-4755-a4a4-e57d95d85c08\",\n            \"29b4f5d1-4fbd-488c-9702-668b500fc51f\",\n            \"5270b6d2-4993-4e62-aece-13f5dab91d12\"\n        ],\n        \"id\": \"4d946791-3671-43ab-a258-02e0098148c3\",\n        \"description\": \"Z\",\n        \"createdDate\": \"2020-08-17T05:49:02.000Z\",\n        \"organizationId\": \"4d7a287e-32b7-44fd-a005-0ed9f2bf03dc\",\n        \"userId\": \"fa820b47-c11d-4625-a134-16531bc2b8e9\",\n        \"policy\": {\n            \"policyId\": \"c722ee10-1841-4725-857b-98434eefef12\",\n            \"requiresAuthentication\": true,\n            \"expiresOn\": \"2020-08-18T09:53:41.766Z\",\n            \"allowedIPs\": [],\n            \"machineNames\": [],\n            \"region\": {}\n        },\n        \"fulfilled\": false,\n        \"username\": \"Mukesh Ambani\"\n    },",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/systemadmin/secrets.js",
    "groupTitle": "Secret"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/systemadmin/?id=organizationId&startDate=startDate&endDate=endDate&dateStats=dateStats",
    "title": "Secrets Created Over Time",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Judo System Admin"
      }
    ],
    "name": "GetAllSecretsAccessedOverTime",
    "group": "Secret",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>Organization unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Starting Date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>Ending Date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"day\"",
              "\"month\"",
              "\"year\""
            ],
            "optional": false,
            "field": "dateStats",
            "description": "<p>Group By parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "secretsCreatedOverTime",
            "description": "<p>Secrets Created of a organization over time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n   {\n       \"day\": \"01\",\n       \"month\": \"08\",\n       \"year\": \"2020\",\n       \"value\": 0\n   },\n   {\n       \"day\": \"02\",\n       \"month\": \"08\",\n       \"year\": \"2020\",\n       \"value\": 0\n   },\n]",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/systemadmin/secretsCreatedOverTime.js",
    "groupTitle": "Secret"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/systemadmin/?id=organizationId&startDate=startDate&endDate=endDate&dateStats=dateStats",
    "title": "Secrets Accessed Over Time",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Judo System Admin"
      }
    ],
    "name": "GetAllSecretsCreatedOverTime",
    "group": "Secret",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>Organization unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Starting Date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>Ending Date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"day\"",
              "\"month\"",
              "\"year\""
            ],
            "optional": false,
            "field": "dateStats",
            "description": "<p>Group By parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "secretsAccessedOverTime",
            "description": "<p>Secrets Accessed of a organization over time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n   {\n       \"day\": \"01\",\n       \"month\": \"08\",\n       \"year\": \"2020\",\n       \"value\": 0\n   },\n   {\n       \"day\": \"02\",\n       \"month\": \"08\",\n       \"year\": \"2020\",\n       \"value\": 0\n   },\n]",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/systemadmin/secretsAccessedOverTime.js",
    "groupTitle": "Secret"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/secrets?oId=:organizationId&p=:page&pp=:perPage&sf=:sortField&so=:sortOrder",
    "title": "My Secrets",
    "version": "0.1.0",
    "permission": [
      {
        "name": "User"
      }
    ],
    "name": "GetMySecrets",
    "group": "Secret",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>=0 Page index.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "perPage",
            "description": "<p>=25 Number of records per page.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortField",
            "description": "<p>Sort field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"descend\"",
              "\"ascend\""
            ],
            "optional": true,
            "field": "sortOrder",
            "description": "<p>Sort order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of records.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "secrets",
            "description": "<p>Array of secrets.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"total\": 1,\n  \"secrets\": [\n    {\n      \"shardIds\": [\n        \"45d75d51-6701-49fd-a14a-ca2df44dcd47\",\n        \"7d6a89ff-88c4-4f22-bbe4-505c410fba05\",\n        \"1ac1a349-6b8e-4215-a478-668e844df588\",\n        \"a7d2f828-cbd6-4515-ac65-8f6a77733c42\",\n        \"22e4a2a4-5af0-4c41-ba8e-eb16e8478b05\"\n      ],\n      \"id\": \"84ff5c42-d4f9-407b-96eb-e02b77cc2575\",\n      \"description\": \"New Secret\",\n      \"createdDate\": \"2019-11-06T17:29:53.000Z\",\n      \"organizationId\": \"a7017390-3327-4bdc-a0a3-8bd4d4e044ac\",\n      \"userId\": \"a62f28f1-bfed-48f4-81af-ef2dc4ed8ad0\",\n      \"policy\": {\n        \"policyId\": \"4208ebd6-ef23-4d8b-84bc-a615a9d816f9\",\n        \"expiresOn\": null,\n        \"allowedIPs\": []\n      },\n      \"fulfilled\": true,\n      \"username\": \"Bob Acme\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/manager/secrets.js",
    "groupTitle": "Secret"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/organizationSecrets?oId=:organizationId&p=:page&pp=:perPage&sf=:sortField&so=:sortOrder",
    "title": "Organization's Secrets",
    "version": "0.1.1",
    "permission": [
      {
        "name": "Manager"
      }
    ],
    "name": "GetOrganizationSecrets",
    "group": "Secret",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "all",
            "description": "<p>Show all secrets or only your secrets.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Page index.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Search text.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "perPage",
            "description": "<p>Number of records per page.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortField",
            "description": "<p>Sort field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"descend\"",
              "\"ascend\""
            ],
            "optional": true,
            "field": "sortOrder",
            "description": "<p>Sort order.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dateStart",
            "description": "<p>Date range start date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dateEnd",
            "description": "<p>Date range end date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of records.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "secrets",
            "description": "<p>Array of secrets.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"total\": 1,\n  \"secrets\": [\n    {\n      \"shardIds\": [\n        \"45d75d51-6701-49fd-a14a-ca2df44dcd47\",\n        \"7d6a89ff-88c4-4f22-bbe4-505c410fba05\",\n        \"1ac1a349-6b8e-4215-a478-668e844df588\",\n        \"a7d2f828-cbd6-4515-ac65-8f6a77733c42\",\n        \"22e4a2a4-5af0-4c41-ba8e-eb16e8478b05\"\n      ],\n      \"id\": \"84ff5c42-d4f9-407b-96eb-e02b77cc2575\",\n      \"description\": \"New Secret\",\n      \"createdDate\": \"2019-11-06T17:29:53.000Z\",\n      \"organizationId\": \"a7017390-3327-4bdc-a0a3-8bd4d4e044ac\",\n      \"userId\": \"a62f28f1-bfed-48f4-81af-ef2dc4ed8ad0\",\n      \"policy\": {\n        \"policyId\": \"4208ebd6-ef23-4d8b-84bc-a615a9d816f9\",\n        \"expiresOn\": null,\n        \"allowedIPs\": []\n      },\n      \"fulfilled\": true,\n      \"username\": \"Bob Acme\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/manager/organizationSecrets.js",
    "groupTitle": "Secret"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/secretDetails/:secretId",
    "title": "User Details",
    "version": "0.1.0",
    "permission": [
      {
        "name": "User"
      }
    ],
    "name": "GetSecretDetails",
    "group": "Secret",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Secret Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "shardIds",
            "description": "<p>Secret shard ids.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Secret description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Secret organization id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Secret user id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Secret user name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "fulfilled",
            "description": "<p>Is the secret fulfilled?</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalTransactions",
            "description": "<p>Total number of transactions for this secret.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalSuccessfulShardAccess",
            "description": "<p>Total number of successful shard accesses for this secret.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalFailedShardAccess",
            "description": "<p>Total number of failed shard accesses for this secret.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "policy",
            "description": "<p>The policy for this secret.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createDate",
            "description": "<p>Created Date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"shardIds\": [\n    \"45d75d51-6701-49fd-a14a-ca2df44dcd47\",\n    \"7d6a89ff-88c4-4f22-bbe4-505c410fba05\",\n    \"1ac1a349-6b8e-4215-a478-668e844df588\",\n    \"a7d2f828-cbd6-4515-ac65-8f6a77733c42\",\n    \"22e4a2a4-5af0-4c41-ba8e-eb16e8478b05\"\n  ],\n  \"id\": \"84ff5c42-d4f9-407b-96eb-e02b77cc2575\",\n  \"description\": \"New Secret\",\n  \"createdDate\": \"2019-11-06T17:29:53.000Z\",\n  \"organizationId\": \"a7017390-3327-4bdc-a0a3-8bd4d4e044ac\",\n  \"userId\": \"a62f28f1-bfed-48f4-81af-ef2dc4ed8ad0\",\n  \"policy\": {\n    \"policyId\": \"4208ebd6-ef23-4d8b-84bc-a615a9d816f9\",\n    \"expiresOn\": null,\n    \"allowedIPs\": []\n  },\n  \"fulfilled\": true,\n  \"username\": \"Bob Acme\",\n  \"totalTransactions\": 1,\n  \"totalSuccessfulShardAccess\": 5,\n  \"totalFailedShardAccess\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/manager/secretDetails.js",
    "groupTitle": "Secret"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/userSecrets?oId=:organizationId&uId=:userId&p=:page&pp=:perPage&sf=:sortField&so=:sortOrder",
    "title": "Users's Secrets",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Manager"
      }
    ],
    "name": "GetUserSecrets",
    "group": "Secret",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>=0 Page index.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "perPage",
            "description": "<p>=25 Number of records per page.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortField",
            "description": "<p>Sort field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"descend\"",
              "\"ascend\""
            ],
            "optional": true,
            "field": "sortOrder",
            "description": "<p>Sort order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of records.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "secrets",
            "description": "<p>Array of secrets.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"total\": 1,\n  \"secrets\": [\n    {\n      \"shardIds\": [\n        \"45d75d51-6701-49fd-a14a-ca2df44dcd47\",\n        \"7d6a89ff-88c4-4f22-bbe4-505c410fba05\",\n        \"1ac1a349-6b8e-4215-a478-668e844df588\",\n        \"a7d2f828-cbd6-4515-ac65-8f6a77733c42\",\n        \"22e4a2a4-5af0-4c41-ba8e-eb16e8478b05\"\n      ],\n      \"id\": \"84ff5c42-d4f9-407b-96eb-e02b77cc2575\",\n      \"description\": \"New Secret\",\n      \"createdDate\": \"2019-11-06T17:29:53.000Z\",\n      \"organizationId\": \"a7017390-3327-4bdc-a0a3-8bd4d4e044ac\",\n      \"userId\": \"a62f28f1-bfed-48f4-81af-ef2dc4ed8ad0\",\n      \"policy\": {\n        \"policyId\": \"4208ebd6-ef23-4d8b-84bc-a615a9d816f9\",\n        \"expiresOn\": null,\n        \"allowedIPs\": []\n      },\n      \"fulfilled\": true,\n      \"username\": \"Bob Acme\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/manager/userSecrets.js",
    "groupTitle": "Secret"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "post",
    "url": "/secret/:secretId/UpdatePolicy",
    "title": "Update a secret's policy",
    "version": "0.1.0",
    "name": "UpdateSecretPolicy",
    "group": "Secret",
    "deprecated": {
      "content": "[This api is not used]"
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "requiresAuthentication",
            "description": "<p>Requires authentication to read the secret back?</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secretId",
            "description": "<p>Secret id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "expiresIn",
            "description": "<p>=0 The number of seconds the secret expires in.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "allowedIPs",
            "description": "<p>IP addresses allowed to access secret.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "machineNames",
            "description": "<p>machine names allowed to access secret.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "regionName",
            "description": "<p>region allowed to access secret.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"a7017390-3327-4bdc-a0a3-8bd4d4e044ac\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "services/src/domain/secret/commands/updatePolicy.js",
    "groupTitle": "Secret"
  },
  {
    "type": "get",
    "url": "/shard/:shardId?s=:secretId&t=:transactionId",
    "title": "Download Shard",
    "version": "0.1.0",
    "name": "GetShard",
    "group": "Shard",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shardId",
            "description": "<p>Shard Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secretId",
            "description": "<p>Secret Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transactionId",
            "description": "<p>Transaction Id.</p>"
          }
        ]
      }
    },
    "filename": "storage/src/routes/policy.js",
    "groupTitle": "Shard"
  },
  {
    "type": "post",
    "url": "/shard/:shardId?s=:secretId&t=:transactionId",
    "title": "Upload Shard",
    "version": "0.1.0",
    "name": "SetShard",
    "group": "Shard",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shardId",
            "description": "<p>Shard Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "secretId",
            "description": "<p>Secret Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transactionId",
            "description": "<p>Transaction Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Shard data.</p>"
          }
        ]
      }
    },
    "filename": "storage/src/routes/policy.js",
    "groupTitle": "Shard"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "post",
    "url": "/user/:userId/AcceptInvite",
    "title": "Accept a user invite",
    "version": "0.1.0",
    "name": "AcceptInvite",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>User profile.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profile[name]",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profile[phone]",
            "description": "<p>User phone. *</p>"
          }
        ]
      }
    },
    "filename": "services/src/domain/user/commands/acceptInvite.js",
    "groupTitle": "Users"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "post",
    "url": "/user/:userId/Disable",
    "title": "Disable a user",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Manager"
      }
    ],
    "name": "DisableUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "filename": "services/src/domain/user/commands/disable.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/user/:userId/Enable",
    "title": "Enable a user",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Manager"
      }
    ],
    "name": "EnableUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "filename": "services/src/domain/user/commands/enable.js",
    "groupTitle": "Users"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/organizations/id=organizationId&search=search",
    "title": "Organization Users",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Judo System Admin"
      }
    ],
    "name": "GetAllOrganizationUsers",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizationId",
            "description": "<p>Organization unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Optional Search parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>=0 Page index.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "perPage",
            "description": "<p>=15 Number of records per page.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sortField",
            "description": "<p>Sort field.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"descend\"",
              "\"ascend\""
            ],
            "optional": true,
            "field": "sortOrder",
            "description": "<p>Sort order.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>User details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n   {\n     \"id\": \"a62f28f1-bfed-48f4-81af-ef2dc4ed8ad0\",\n     \"name\": \"Bob Acme\",\n     \"contactNo\": \"930-992-9938\",\n     \"status\": \"active\",\n     \"role\": \"organizationAdmin\",\n     \"createdDate\": \"2020-07-15T11:48:19.000Z\",\n     \"username\": \"admin@acme.io\"\n   },\n   {\n     \"id\": \"017dc337-7566-47ea-9eb5-16dddbbafa4a\",\n     \"name\": \"Jaison Green\",\n     \"contactNo\": \"939-993-9292\",\n     \"status\": \"active\",\n     \"role\": \"organizationMember\",\n     \"createdDate\": \"2020-07-15T11:48:18.000Z\",\n     \"username\": \"jaison@acme.io\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/systemadmin/users.js",
    "groupTitle": "Users"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/systemadmin/?id=organizationId&startDate=startDate&endDate=endDate&dateStats=dateStats",
    "title": "Users Over Time",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Judo System Admin"
      }
    ],
    "name": "GetAllOrganizationUsersCreatedOverTime",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>Organization unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Starting Date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>Ending Date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"day\"",
              "\"month\"",
              "\"year\""
            ],
            "optional": false,
            "field": "dateStats",
            "description": "<p>Group By parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "UsersOverTime",
            "description": "<p>Organization Users creater over time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n   {\n       \"day\": \"01\",\n       \"month\": \"08\",\n       \"year\": \"2020\",\n       \"value\": 0\n   },\n   {\n       \"day\": \"02\",\n       \"month\": \"08\",\n       \"year\": \"2020\",\n       \"value\": 0\n   },\n]",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/systemadmin/usersOverTime.js",
    "groupTitle": "Users"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/profile",
    "title": "User Profile",
    "version": "0.1.0",
    "permission": [
      {
        "name": "User"
      }
    ],
    "name": "GetProfile",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>User status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roles",
            "description": "<p>User roles.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createDate",
            "description": "<p>Created Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "organizations",
            "description": "<p>User's organizations.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"a62f28f1-bfed-48f4-81af-ef2dc4ed8ad0\",\n  \"username\": \"admin@acme.io\",\n  \"status\": \"active\",\n  \"profile\": {\n    \"name\": \"Bob Acme\",\n    \"phone\": \"930-992-9938\"\n  },\n  \"roles\": \"organizationAdmin\",\n  \"createDate\": \"2019-10-30T16:57:16.000Z\",\n  \"organizations\": [\n    {\n      \"id\": \"a7017390-3327-4bdc-a0a3-8bd4d4e044ac\",\n      \"name\": \"Acme Corporation\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/manager/profile.js",
    "groupTitle": "Users"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/userDetails/:userId",
    "title": "User Details",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Manager"
      }
    ],
    "name": "GetUserDetails",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>User status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "profile",
            "description": "<p>Profile information.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roles",
            "description": "<p>User roles.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createDate",
            "description": "<p>Created Date.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"017dc337-7566-47ea-9eb5-16dddbbafa4a\",\n  \"username\": \"jaison@acme.io\",\n  \"status\": \"active\",\n  \"profile\": {\n    \"name\": \"Jaison Green\",\n    \"phone\": \"939-993-9292\"\n  },\n  \"roles\": \"organizationMember\",\n  \"createDate\": \"2019-10-30T16:57:15.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/manager/userDetails.js",
    "groupTitle": "Users"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "get",
    "url": "/users",
    "title": "Organization's Users",
    "version": "0.1.0",
    "permission": [
      {
        "name": "Manager"
      }
    ],
    "name": "GetUsers",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "users",
            "description": "<p>Array of users.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": \"017dc337-7566-47ea-9eb5-16dddbbafa4a\",\n    \"username\": \"jaison@acme.io\",\n    \"status\": \"active\",\n    \"profile\": {\n      \"name\": \"Jaison Green\",\n      \"phone\": \"939-993-9292\"\n    },\n    \"roles\": \"organizationMember\",\n    \"createDate\": \"2019-10-30T16:57:15.000Z\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "projections/src/projections/views/manager/users.js",
    "groupTitle": "Users"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "post",
    "url": "/user/:userId/ResendInvitation",
    "title": "Resend user invite",
    "version": "0.1.1",
    "name": "ResendInvite",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "organization",
            "description": "<p>Organization.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organization[id]",
            "description": "<p>Organization Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organization[name]",
            "description": "<p>Organization Name.</p>"
          }
        ]
      }
    },
    "filename": "services/src/domain/user/commands/resendInvitation.js",
    "groupTitle": "Users"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "post",
    "url": "/user/:userId/UpdateProfile",
    "title": "Update member profile",
    "version": "0.1.0",
    "name": "UpdateProfile",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User phone.</p>"
          }
        ]
      }
    },
    "filename": "services/src/domain/user/commands/emailUpdate.js",
    "groupTitle": "Users"
  },
  {
    "0": "p",
    "1": "r",
    "2": "i",
    "3": "v",
    "4": "a",
    "5": "t",
    "6": "e",
    "type": "post",
    "url": "/user/:userId/UpdateProfile",
    "title": "Update member profile",
    "version": "0.1.0",
    "name": "UpdateProfile",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User phone.</p>"
          }
        ]
      }
    },
    "filename": "services/src/domain/user/commands/updateProfile.js",
    "groupTitle": "Users"
  }
] });
