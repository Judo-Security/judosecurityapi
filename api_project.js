define({
  "name": "Judo Security Secrets",
  "version": "0.1.1",
  "description": "Judo Security Secrets api documentation.",
  "title": "Judo Security API documentation",
  "url": "",
  "header": {
    "title": "Creating and Retrieving a Secret",
    "content": "<h1>Welcome to the Judo Security API</h1>\n<p>This API documentation outlines the APIs used on the Judo Portal and Clients. The following guide shows how to create, retrieve, expire, and delete a secret. This API is useful if you want to create your own Judo Client.</p>\n<p>If you would rather not create your own Judo Client, you are free to use the CLI Judo Client or the Judo Web Client to create secrets. You can find instructions for these clients on the Judo Portal.</p>\n<p><em>All requests require a <strong>JSON Web Token</strong> for authorization. You can grab your token by logging into the Judo Portal and copying it from your profile page by clicking on the <strong>Get Client Key</strong> button.</em></p>\n<h2>Creating your own Judo client</h2>\n<p>Judo current has two Judo clients for you to use.\n<strong>Node CLI:</strong> We have created a command line client that you can use across all platforms that run NodeJS. You can install this client via NPM (https://www.npmjs.com/package/@judosecurity/judo-node-client).\n<strong>Web client:</strong> This client is usually used for demonstration purposes. But it has all the same features as the Node CLI client.</p>\n<p>If your goal is to create your own client there are some important pieces of information you will need to know before proceeding. The Judo provided clients perform specific steps for the user that the APIs do not handle. Your Judo client will need to keep these steps in mind. Feel free to construct your client in the most efficient way for your needs.</p>\n<h3>Judo Client Steps:</h3>\n<p>This is a walkthrough of every step that our Judo client performs.</p>\n<ol>\n<li>Encrypt the &quot;secret&quot;.\n<ol>\n<li>Create a DEK (32 random bytes).</li>\n<li>Encrypt the &quot;secret&quot; (we use aes-256) using the DEK.</li>\n<li>Create a KEK (32 random bytes).</li>\n<li>Encrypt the DEK (aes-256) using the KEK.</li>\n</ol>\n</li>\n<li>Use Shamirs to split the KEK into multiple shards.</li>\n<li><a href=\"#api-Organization-CreateSecret\">API call: <em>Reserve a secret</em></a>. If you broke your secret into 5 shards you should reserve a secret for 5 shards.</li>\n<li>Keep note of the URLs returned from the API endpoint. You will write and eventually read from these URLs. You won't be able to request these URLs again.</li>\n<li>Create a GUID to use as a TransactionID.</li>\n<li>Upload each of the shards to one of the URLs received using the <a href=\"#api-Shard-SetShard\"><em>Shard/Upload Shard</em> API call</a>.</li>\n<li>Mark the secret as fulfilled by calling the <a href=\"#api-Secret-FulfillSecret\">Fulfull secret API call</a>.</li>\n<li>Create a Judo file or store information so you can retrieve and decrypt the secret later. Our client creates a Judo file. You can see an example of a Judo file in the next section.</li>\n</ol>\n<h3>Example Judo File</h3>\n<p><strong>created:</strong> Date/Time the Judo file was created</p>\n<p><strong>version:</strong> The version of the Judo file.</p>\n<p><strong>type:</strong> 1 = string secret, 2 = file secret</p>\n<p><strong>name:</strong> The friendly name of the secret.</p>\n<p><strong>secret_id:</strong> The id of the secret. This information comes back from the &quot;Reserve Secret&quot; endpoint.</p>\n<p><strong>index:</strong> The shard URLs.</p>\n<p><strong>n:</strong> The number of shards.</p>\n<p><strong>m:</strong> The minimum number of shards required to recreate the secret.</p>\n<p><strong>wrapped_key:</strong> The encrypted DEK.</p>\n<p><strong>data:</strong> The encrypted secret.</p>\n<pre class=\"prettyprint\">{\n    \"created\": \"11/15/2019, 9:23:36 AM\",\n    \"version\": 1,\n    \"type\": 1,\n    \"name\": \"Database password\",\n    \"secret_id\": \"5d093294-2725-4a29-948a-ba13d648f5f0\",\n    \"index\": [\n        \"http://localhost/store_1/shard/784837a9-7407-4ec4-a4f9-6dc0080d59c1\",\n        \"http://localhost/store_2/shard/8bc9d982-c318-44e5-83dd-f12ff4c0b2d8\",\n        \"http://localhost/store_1/shard/25ab53ed-0495-4c36-aa38-c7baefbb8842\",\n        \"http://localhost/store_2/shard/6c74ef8d-ac14-4b49-a884-361adec1b9cf\",\n        \"http://localhost/store_1/shard/ceb365fb-c7ff-4d4a-b172-b2ad9b2aee7c\"\n    ],\n    \"n\": 5,\n    \"m\": 3,\n    \"wrapped_key\": \"mR3+Aa4tWYY2xt8Q0iJNofT8DN3Pj1reGX1QUGjD75YtpwOqDIDB3k4dbx7DBuVRetdce/JP0xtwrvl1BUcVUw==\",\n    \"data\": \"aYANqMgUPUzW9xRQU6a9ipwWQSHpr1cknm+BSMG20BUO1+68yIQ=\"\n}\n</code></pre>\n<h2>API Endpoints</h2>\n<h3>Creating a Secret</h3>\n<table>\n<thead>\n<tr>\n<th>Step</th>\n<th>Action</th>\n<th>Description</th>\n<th>API</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Reserve a secret</td>\n<td>Reserves a secret and gets storage locations for all the shards.</td>\n<td>Organization/Create a secret</td>\n</tr>\n<tr>\n<td>2</td>\n<td>Fill all shards</td>\n<td>Call this endpoint for each shard storage location.</td>\n<td>Shard/Upload Shard</td>\n</tr>\n<tr>\n<td>3</td>\n<td>Fulfill secret</td>\n<td>Mark the secret as completed and all shards have been fulfilled.</td>\n<td>Secret/Mark a secret as fulfilled</td>\n</tr>\n</tbody>\n</table>\n<h3>Retrieving a Secret</h3>\n<table>\n<thead>\n<tr>\n<th>Step</th>\n<th>Action</th>\n<th>Description</th>\n<th>API</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>Download shards</td>\n<td>Call this endpoint for each stored shard.</td>\n<td>Shard/Download Shard</td>\n</tr>\n</tbody>\n</table>\n"
  },
  "template": {
    "forceLanguage": "en"
  },
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2020-09-04T06:47:35.268Z",
    "url": "https://apidocjs.com",
    "version": "0.25.0"
  }
});
