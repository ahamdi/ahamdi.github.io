---
title: Social Rest Api v1.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="social-rest-api">Social Rest Api v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

All used social rest endpoints

License: <a href="https://www.gnu.org/licenses/lgpl-3.0.en.html">LGPL</a>

<h1 id="social-rest-api-v1-social-activities">v1/social/activities</h1>

Managing activities together with comments and likes

## getActivities

<a id="opIdgetActivities"></a>

`GET /v1/social/activities`

*Gets activities of a specific user*

This returns an activity in the list in the following cases: <br/><ul><li>this is a user activity and the owner of the activity isthe authenticated user or one of his connections</li><li>this is a space activity and the authenticated user is a member of the space</li></ul>

<h3 id="getactivities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|query|string|false|Space technical identifier|
|beforeTime|query|string|false|offset time to use for searching newer activities until a time identified using format yyyy-MM-dd HH:mm:ss|
|afterTime|query|string|false|offset time to use for searching newer activities since a time identified using format yyyy-MM-dd HH:mm:ss|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|returnSize|query|boolean|false|Returning the number of activities or not|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: <em>comments</em> or <em>likes</em>|
|streamType|query|string|false|Activity stream type. Possible values: ALL_STREAM, USER_STREAM, USER_FAVORITE_STREAM, MANAGE_SPACES_STREAM, FAVORITE_SPACES_STREAM.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|streamType|ALL_STREAM|
|streamType|USER_STREAM|
|streamType|USER_FAVORITE_STREAM|
|streamType|MANAGE_SPACES_STREAM|
|streamType|FAVORITE_SPACES_STREAM|
|streamType|ANY_SPACE_ACTIVITY|

<h3 id="getactivities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## postActivity

<a id="opIdpostActivity"></a>

`POST /v1/social/activities`

*Posts an activity to a specific space*

This posts the activity if the authenticated user is a member of the space or a spaces super manager.

> Body parameter

<h3 id="postactivity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|query|string|true|Space id|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: comments or likes|
|body|body|[ActivityEntity](#schemaactivityentity)|true|Activity object to be created|

<h3 id="postactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## searchActivities

<a id="opIdsearchActivities"></a>

`GET /v1/social/activities/search`

*Search activities using a query*

This returns a list of activities found by using search term

<h3 id="searchactivities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|Term to search|
|favorites|query|boolean|true|Whether to search in favorites only or not|
|tags|query|array[string]|true|Tag names used to search activities|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|

<h3 id="searchactivities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getActivityById

<a id="opIdgetActivityById"></a>

`GET /v1/social/activities/{activityId}`

*Gets a specific activity by id*

This returns the activity in the following cases: <br/><ul><li>this is a user activity and the owner of the activity is the authenticated user or one of his connections</li><li>this is a space activity and the authenticated user is a member of the space</li><li>the authenticated user is the super user</li></ul>

<h3 id="getactivitybyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityId|path|string|true|Activity id|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: comments or likes|

<h3 id="getactivitybyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateActivityById

<a id="opIdupdateActivityById"></a>

`PUT /v1/social/activities/{activityId}`

*Updates a specific activity by id*

This updates the activity in the following cases: <br/><ul><li>this is a user activity and the owner of the activity is the authenticated user</li><li>the authenticated user is the super user</li></ul>

> Body parameter

<h3 id="updateactivitybyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityId|path|string|true|Activity id|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: comments or likes|
|body|body|[ActivityEntity](#schemaactivityentity)|true|Activity object to be updated, ex: <br/>{<br/>"title" : "My activity"<br/>}|

<h3 id="updateactivitybyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteActivityById

<a id="opIddeleteActivityById"></a>

`DELETE /v1/social/activities/{activityId}`

*Deletes a specific activity by id*

This deletes the activity in the following cases: <br/><ul><li>this is a user activity and the owner of the activity is the authenticated user</li><li>the authenticated user is the super user</li></ul>

<h3 id="deleteactivitybyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityId|path|string|true|Activity id|
|hide|query|boolean|false|Whether to just hide the activity or effectively delete it from database|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="deleteactivitybyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getComments

<a id="opIdgetComments"></a>

`GET /v1/social/activities/{activityId}/comments`

*Gets comments of a specific activity*

This returns a list of comments if the authenticated user has permissions to see the activity.

<h3 id="getcomments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityId|path|string|true|Activity id|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|returnSize|query|boolean|false|Returning the number of activities or not|
|sortDescending|query|boolean|false|Retrieve comments by last post time or by first post time|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="getcomments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateComment

<a id="opIdupdateComment"></a>

`PUT /v1/social/activities/{activityId}/comments`

*Updates an existing comment*

This updates an existing comment if the authenticated user is poster of the comment.

> Body parameter

<h3 id="updatecomment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityId|path|string|true|Activity id|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|
|body|body|[CommentEntity](#schemacommententity)|true|Comment object to be posted, ex: <br/>{<br/>"title" : "My comment"<br/>}|

<h3 id="updatecomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## postComment

<a id="opIdpostComment"></a>

`POST /v1/social/activities/{activityId}/comments`

*Posts a comment on a specific activity*

This posts the comment if the authenticated user has permissions to see the activity.

> Body parameter

<h3 id="postcomment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityId|path|string|true|Activity id|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|
|body|body|[CommentEntity](#schemacommententity)|true|Comment object to be posted, ex: <br/>{<br/>"title" : "My comment"<br/>}|

<h3 id="postcomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getLikesOfActivity

<a id="opIdgetLikesOfActivity"></a>

`GET /v1/social/activities/{activityId}/likes`

*Gets likes of a specific activity*

This returns a list of likes if the authenticated user has permissions to see the activity.

<h3 id="getlikesofactivity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityId|path|string|true|Activity id|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="getlikesofactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## addLike

<a id="opIdaddLike"></a>

`POST /v1/social/activities/{activityId}/likes`

*Adds a like to a specific activity*

This adds the like if the authenticated user has permissions to see the activity.

<h3 id="addlike-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityId|path|string|true|Activity id|

<h3 id="addlike-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteLike

<a id="opIddeleteLike"></a>

`DELETE /v1/social/activities/{activityId}/likes`

*Deletes a like of a specific user for a given activity*

This deletes the like of authenticated user from an activity

<h3 id="deletelike-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityId|path|string|true|Activity id|

<h3 id="deletelike-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## shareActivity

<a id="opIdshareActivity"></a>

`POST /v1/social/activities/{activityId}/share`

*Shares a specific activity to specific spaces*

This shares the given activity to the target spaces if the authenticated user has permissions to post to the target spaces

> Body parameter

<h3 id="shareactivity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|activityId|path|string|true|Activity id|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: comments or likes|
|body|body|[ActivityEntity](#schemaactivityentity)|true|Share target spaces|

<h3 id="shareactivity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="social-rest-api-v1-social-groupspacebindings">v1/social/groupSpaceBindings</h1>

API  to manage the binding between a space and an organization group

## getBindingReportOperations

<a id="opIdgetBindingReportOperations"></a>

`GET /v1/social/spaceGroupBindings/getBindingReportOperations`

*Gets list of groups entities from the parent group root.*

Returns a list of group entities in the following cases if the authenticated user is an administrator.

<h3 id="getbindingreportoperations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getReport

<a id="opIdgetReport"></a>

`GET /v1/social/spaceGroupBindings/getExport`

*Gets CSV report*

Given a (space,group,action,groupBindingId), it return all lines of the report in a csv file

<h3 id="getreport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|query|string|true|spaceId|
|action|query|string|true|action|
|group|query|string|true|group|
|groupBindingId|query|string|false|groupBindingId|

<h3 id="getreport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getGroupsTree

<a id="opIdgetGroupsTree"></a>

`GET /v1/social/spaceGroupBindings/getGroupsTree`

*Gets list of groups entities from the parent group root.*

Returns a list of group entities in the following cases if the authenticated user is an administrator.

<h3 id="getgroupstree-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSpaceBinding

<a id="opIddeleteSpaceBinding"></a>

`DELETE /v1/social/spaceGroupBindings/removeGroupSpaceBinding/{bindingId}`

*Deletes a binding.*

This method deletes a binding in the following cases the authenticated user is an administrator.

<h3 id="deletespacebinding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bindingId|path|string|true|spaceId|

<h3 id="deletespacebinding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## saveGroupSpaceBindings

<a id="opIdsaveGroupSpaceBindings"></a>

`POST /v1/social/spaceGroupBindings/saveGroupsSpaceBindings/{spaceId}`

*Save space group bindings*

This method set bindings for a specific space with a list of groups if the authenticated user is an administrator.

> Body parameter

```json
[
  "string"
]
```

<h3 id="savegroupspacebindings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|SpaceId of the space|
|body|body|array[string]|true|List of group names to be bound to the space|

<h3 id="savegroupspacebindings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error due to data encoding|None|

<aside class="success">
This operation does not require authentication
</aside>

## getBindingsBySpaceId

<a id="opIdgetBindingsBySpaceId"></a>

`GET /v1/social/spaceGroupBindings/{spaceId}`

*Gets list of binding for a space.*

Returns a list of bindings in the following cases if the authenticated user is an administrator.

<h3 id="getbindingsbyspaceid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|query|string|true|Space id|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|returnSize|query|boolean|false|Returning the number of spaces found or not|

<h3 id="getbindingsbyspaceid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="social-rest-api-v1-social-comments">v1/social/comments</h1>

Operations on a comment

## getCommentById

<a id="opIdgetCommentById"></a>

`GET /v1/social/comments/{id}`

*Gets a specific comment by id*

This returns the comment if the authenticated user has permissions to see the related activity.

<h3 id="getcommentbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Comment id|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="getcommentbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateCommentById

<a id="opIdupdateCommentById"></a>

`PUT /v1/social/comments/{id}`

*Updates a specific comment by id*

This updates the comment in the following cases: <br/><ul><li>the authenticated user is the owner of the comment</li><li>the authenticated user is the super user</li></ul>

> Body parameter

<h3 id="updatecommentbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Comment id|
|expand|query|string|false|Asking for a full representation of a subresource if any|
|body|body|[CommentEntity](#schemacommententity)|true|Comment object to be updated, in which the title of comment is required.|

<h3 id="updatecommentbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteCommentById

<a id="opIddeleteCommentById"></a>

`DELETE /v1/social/comments/{id}`

*Deletes a specific comment by id*

This deletes the comment in the following cases: <br/><ul><li>the authenticated user is the owner of the comment</li><li>the authenticated user is the super user</li></ul>

<h3 id="deletecommentbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Comment id|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="deletecommentbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getLikesOfComment

<a id="opIdgetLikesOfComment"></a>

`GET /v1/social/comments/{id}/likes`

*Gets likes of a specific comment*

This returns a list of likes if the authenticated user has permissions to see the comment.

<h3 id="getlikesofcomment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Comment id|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="getlikesofcomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## addLikeOnComment

<a id="opIdaddLikeOnComment"></a>

`POST /v1/social/comments/{id}/likes`

*Adds a like to a specific comment*

This adds the like if the authenticated user has permissions to see the comment.

<h3 id="addlikeoncomment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Comment id|
|expand|query|string|false|Asking for a full representation of a subresource if any|

<h3 id="addlikeoncomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteLikeOnComment

<a id="opIddeleteLikeOnComment"></a>

`DELETE /v1/social/comments/{id}/likes/{username}`

*Deletes a like of a specific user for a given comment*

This deletes the like if the authenticated user is the given user or the super user.

<h3 id="deletelikeoncomment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Comment id|
|username|path|string|true|User name|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="deletelikeoncomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="social-rest-api-v1-social-favorites">v1/social/favorites</h1>

Managing favorites for any type of data

## getFavoritesList

<a id="opIdgetFavoritesList"></a>

`GET /v1/social/favorites`

*Retrieves all favorites object of the current user*

Retrieves all favorites object of the current user

<h3 id="getfavoriteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int32)|true|Query Offset|
|limit|query|integer(int32)|true|Query results limit|
|returnSize|query|boolean|false|Fovorites total size|

<h3 id="getfavoriteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## createFavorite

<a id="opIdcreateFavorite"></a>

`POST /v1/social/favorites/{objectType}/{objectId}`

*Creates a favorite object*

Creates a favorite object

<h3 id="createfavorite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|Object type: activity, comment, notes ...|
|objectId|path|string|true|Object identifier: technical id to identify object as favorite|
|parentObjectId|query|string|false|Object parent identifier: technical id to identify the parent of an object like the activity Id for a comment entity|
|spaceId|query|integer(int64)|false|Space technical identitifier of the bookmarked object|
|ignoreWhenExisting|query|boolean|false|Whether ignore favorite when already exists or return a HTTP 409 code|

<h3 id="createfavorite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteFavorite

<a id="opIddeleteFavorite"></a>

`DELETE /v1/social/favorites/{objectType}/{objectId}`

*Deletes a metadata item identified by its id*

Deletes a metadata item identified by its id

<h3 id="deletefavorite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|Object type: activity, comment, notes ...|
|objectId|path|string|true|Object identifier: technical id to identify object as favorite|
|ignoreNotExisting|query|boolean|false|Whether ignore when not existing Metadata item or not.If true, it will return a HTTP code 204 when not existing else a 404.|

<h3 id="deletefavorite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="social-rest-api-v1-social-identities">v1/social/identities</h1>

Managing identities

## getIdentities

<a id="opIdgetIdentities"></a>

`GET /v1/social/identities`

*Gets all identities*

This returns a list of identities in the following cases: <br/><ul><li>the authenticated user has permissions to view the object linked to these identities</li><li>the authenticated user is in the group /platform/administrators</li></ul>

<h3 id="getidentities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Provider type: space or organization|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|returnSize|query|boolean|false|Returning the number of identities or not|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="getidentities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getIdentityById

<a id="opIdgetIdentityById"></a>

`GET /v1/social/identities/{id}`

*Gets an identity by id*

This returns the identity if the authenticated user has permissions to view the object linked to this identity.

<h3 id="getidentitybyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identity id which is a UUID such as 40487b7e7f00010104499b339f056aa4|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="getidentitybyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getIdentityAvatarById

<a id="opIdgetIdentityAvatarById"></a>

`GET /v1/social/identities/{id}/avatar`

*Gets an identity avatar by id*

Gets an identity avatar by id, This can only be done by the logged in user.

<h3 id="getidentityavatarbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identity id which is a UUID|

<h3 id="getidentityavatarbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getIdentityBannerById

<a id="opIdgetIdentityBannerById"></a>

`GET /v1/social/identities/{id}/banner`

*Gets an identity banner by id*

This can only be done by the logged in user.

<h3 id="getidentitybannerbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Identity id which is a UUID|

<h3 id="getidentitybannerbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getCommonConnectionsWithIdentity

<a id="opIdgetCommonConnectionsWithIdentity"></a>

`GET /v1/social/identities/{id}/commonConnections`

*Gets common connections with identity*

This returns the common connections between a the authenticated user and a given identity.

<h3 id="getcommonconnectionswithidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The given identity id|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|returnSize|query|boolean|false|Returning the number of common connections or not|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="getcommonconnectionswithidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRelationshipsOfIdentity

<a id="opIdgetRelationshipsOfIdentity"></a>

`GET /v1/social/identities/{id}/relationships`

*Gets relationships of a specific identity*

This returns a list of relationships if the authenticated user can view the object linked to the identity.

<h3 id="getrelationshipsofidentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The given identity id|
|with|query|string|false|The other identity id to get the relationship with the given one|
|returnSize|query|boolean|false|Returning the number of relationships or not|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="getrelationshipsofidentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getIdentityByProviderIdAndRemoteId

<a id="opIdgetIdentityByProviderIdAndRemoteId"></a>

`GET /v1/social/identities/{providerId}/{remoteId}`

*Gets an identity by id*

This returns the identity if the authenticated user has permissions to view the object linked to this identity.

<h3 id="getidentitybyprovideridandremoteid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|providerId|path|string|true|Identity provider id which can be of type 'space' or 'organization' for example|
|remoteId|path|string|true|Identity id which is the unique name (remote id) of identity|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="getidentitybyprovideridandremoteid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="social-rest-api-v1-social-relationships">v1/social/relationships</h1>

Managing relationships of identities

## getRelationships

<a id="opIdgetRelationships"></a>

`GET /v1/social/relationships`

*Gets relationships of identities*

This returns a list of relationships in the following cases: <br/><ul><li>the authenticated user has permissions to view the 2 objects linked to the 2 identities</li><li>the authenticated user is in the group /platform/administrators</li></ul>

<h3 id="getrelationships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Status of the target relationship: pending, confirmed or all|
|identityId|query|string|false|Identity id which is a UUID such as 40487b7e7f00010104499b339f056aa4|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|returnSize|query|boolean|false|Returning the number of relationships or not|

<h3 id="getrelationships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|412|[Precondition Failed](https://tools.ietf.org/html/rfc7232#section-4.2)|Precondition failed, check your input params|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## createRelationship

<a id="opIdcreateRelationship"></a>

`POST /v1/social/relationships`

*Creates a relationship*

This creates the relationship in the following cases: <br/><ul><li>the authenticated user has permissions to view the 2 objects linked to the 2 identities</li><li>the authenticated user is in the group /platform/administrators</li></ul>

> Body parameter

<h3 id="createrelationship-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|
|body|body|[RelationshipEntity](#schemarelationshipentity)|true|Relationship object to be created|

<h3 id="createrelationship-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getRelationshipById

<a id="opIdgetRelationshipById"></a>

`GET /v1/social/relationships/{id}`

*Gets a specific relationship by id*

This returns the relationship if the authenticated user has permissions to view the objects linked to this relationship.

<h3 id="getrelationshipbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Relationship id|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="getrelationshipbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateRelationshipById

<a id="opIdupdateRelationshipById"></a>

`PUT /v1/social/relationships/{id}`

*Updates a specific relationship by id*

This updates the relationship if the authenticated user has permissions to view the objects linked to this relationship.

> Body parameter

<h3 id="updaterelationshipbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Relationship id|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|
|body|body|[RelationshipEntity](#schemarelationshipentity)|true|Relationship object to be updated|

<h3 id="updaterelationshipbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteRelationshipById

<a id="opIddeleteRelationshipById"></a>

`DELETE /v1/social/relationships/{id}`

*Deletes a specific relationship by id*

This deletes the relationship if the authenticated user has permissions to view the objects linked to this relationship.

<h3 id="deleterelationshipbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Relationship id|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="deleterelationshipbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="social-rest-api-v1-social-search">v1/social/search</h1>

Operations on search connectors

## getConnectors

<a id="opIdgetConnectors"></a>

`GET /v1/social/search`

*Gets search connectors*

This returns a list of search connectors

<h3 id="getconnectors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|

<aside class="success">
This operation does not require authentication
</aside>

## changeConnectorStatus

<a id="opIdchangeConnectorStatus"></a>

`PUT /v1/social/search/{connectorName}`

*Changes status of search connector*

This changes the status of a specific search connector

<h3 id="changeconnectorstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|connectorName|path|string|true|Search connector name|
|enable|query|boolean|true|Search connector status enabled/disabled. possible values: true for enabled, else false|

<h3 id="changeconnectorstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Not authorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="social-rest-api-v1-social-spaces">v1/social/spaces</h1>

Operations on spaces with their activities and users

## getSpaces

<a id="opIdgetSpaces"></a>

`GET /v1/social/spaces`

*Gets spaces of user*

This returns a list of spaces switch request parameters

<h3 id="getspaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|Space name search information|
|filterType|query|string|false|Type of spaces to retrieve: all, userSpaces, invited, pending or requests|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit, if equals to 0, it will not retrieve spaces|
|sort|query|string|false|Sort|
|order|query|string|false|Order|
|returnSize|query|boolean|false|Returning the number of spaces found or not|
|favorites|query|boolean|false|Returning the favorite spaces of current user not not|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: members or managers|

<h3 id="getspaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## createSpace

<a id="opIdcreateSpace"></a>

`POST /v1/social/spaces`

*Creates a space*

This can only be done by the logged in user.

> Body parameter

<h3 id="createspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: members or managers|
|body|body|[SpaceEntity](#schemaspaceentity)|true|Space object to be created, ex:<br />{<br />"displayName": "My space",<br />"description": "This is my space",<br />"groupId": "/spaces/my_space",<br />"visibility": "private",<br />"subscription": "validation"<br />}|

<h3 id="createspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpaceApplicationsChoices

<a id="opIdgetSpaceApplicationsChoices"></a>

`GET /v1/social/spaces/applications`

*Return list of applications that a use is allowed to add to a space*

Return list of applications that a use is allowed to add to a space

<h3 id="getspaceapplicationschoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## addSpaceApplication

<a id="opIdaddSpaceApplication"></a>

`POST /v1/social/spaces/applications`

*Add an application into list of allowed application to instantiate in spaces*

Add an application into list of allowed application to instantiate in spaces

> Body parameter

<h3 id="addspaceapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Application](#schemaapplication)|false|none|

<h3 id="addspaceapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Request fulfilled|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSpaceApplication

<a id="opIddeleteSpaceApplication"></a>

`DELETE /v1/social/spaces/applications/{applicationName}`

*Deletes an application from list of allowed application to instantiate in spaces*

Deletes an application from list of allowed application to instantiate in spaces

<h3 id="deletespaceapplication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationName|path|string|true|Application name|

<h3 id="deletespaceapplication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Request fulfilled|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpaceByDisplayName

<a id="opIdgetSpaceByDisplayName"></a>

`GET /v1/social/spaces/byDisplayName/{displayName}`

*Gets a specific space by display name*

This returns the space in the following cases: <br/><ul><li>the authenticated user is a member of the space</li><li>the space is "public"</li><li>the authenticated user is a spaces super manager</li></ul>

<h3 id="getspacebydisplayname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|displayName|path|string|true|Space id|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: members or managers|

<h3 id="getspacebydisplayname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpaceByPrettyName

<a id="opIdgetSpaceByPrettyName"></a>

`GET /v1/social/spaces/byPrettyName/{prettyName}`

*Gets a specific space by pretty name*

This returns the space in the following cases: <br/><ul><li>the authenticated user is a member of the space</li><li>the space is "public"</li><li>the authenticated user is a spaces super manager</li></ul>

<h3 id="getspacebyprettyname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prettyName|path|string|true|Space id|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: members or managers|

<h3 id="getspacebyprettyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## declineExternalInvitations

<a id="opIddeclineExternalInvitations"></a>

`DELETE /v1/social/spaces/externalInvitations/{invitationId}`

*Delete a specific external invitation from a specific space*

This Delete a specific external invitation from a specific space if the authenticated user is a member or manager of the space or a spaces super manager.

<h3 id="declineexternalinvitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invitationId|path|string|true|invitation id|

<h3 id="declineexternalinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpaceById

<a id="opIdgetSpaceById"></a>

`GET /v1/social/spaces/{id}`

*Gets a specific space by id*

This returns the space in the following cases: <br/><ul><li>the authenticated user is a member of the space</li><li>the space is "public"</li><li>the authenticated user is a spaces super manager</li></ul>

<h3 id="getspacebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space id|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: members or managers|

<h3 id="getspacebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateSpaceById

<a id="opIdupdateSpaceById"></a>

`PUT /v1/social/spaces/{id}`

*Updates a specific space by id*

This updates the space in the following cases: <br/><ul><li>the authenticated user is a manager of the space</li><li>the authenticated user is the owner of the space</li><li>the authenticated user is a spaces super manager</li></ul>

> Body parameter

<h3 id="updatespacebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space id|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: members or managers|
|body|body|[SpaceEntity](#schemaspaceentity)|true|Space object to be updated|

<h3 id="updatespacebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSpaceById

<a id="opIddeleteSpaceById"></a>

`DELETE /v1/social/spaces/{id}`

*Deletes a specific space by id*

This deletes the space in the following cases: <br/><ul><li>the authenticated user is a manager of the space</li><li>the authenticated user is the owner of the space</li><li>the authenticated user is a spaces super manager</li></ul>

<h3 id="deletespacebyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space id|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="deletespacebyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpaceActivitiesById

<a id="opIdgetSpaceActivitiesById"></a>

`GET /v1/social/spaces/{id}/activities`

*Gets space activities by space id*

This returns the space's activities if the authenticated user is a member of the space or a spaces super manager.

<h3 id="getspaceactivitiesbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space id|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|before|query|string|false|Base time to load older activities (yyyy-MM-dd HH:mm:ss)|
|after|query|string|false|Base time to load newer activities (yyyy-MM-dd HH:mm:ss)|
|returnSize|query|boolean|false|Returning the number of activities or not|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: comments or likes|

<h3 id="getspaceactivitiesbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## postActivityOnSpace

<a id="opIdpostActivityOnSpace"></a>

`POST /v1/social/spaces/{id}/activities`

*Posts an activity to a specific space*

This posts the activity if the authenticated user is a member of the space or a spaces super manager.

> Body parameter

<h3 id="postactivityonspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space id|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: comments or likes|
|body|body|[ActivityEntity](#schemaactivityentity)|true|Activity object to be created|

<h3 id="postactivityonspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpaceApplications

<a id="opIdgetSpaceApplications"></a>

`GET /v1/social/spaces/{id}/applications`

*Return list of applications of a space*

Return list of applications of a space

<h3 id="getspaceapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space id|

<h3 id="getspaceapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Request fulfilled|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## addSpaceApplication_1

<a id="opIdaddSpaceApplication_1"></a>

`POST /v1/social/spaces/{id}/applications`

*Add a new application into space*

Add a new application into space

> Body parameter

<h3 id="addspaceapplication_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space id|
|body|body|object|false|none|
|» appId|body|string|true|Application id|

<h3 id="addspaceapplication_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Request fulfilled|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## moveSpaceApplicationOrder

<a id="opIdmoveSpaceApplicationOrder"></a>

`PUT /v1/social/spaces/{id}/applications/{appId}`

*Deletes a selected application of a space*

Deletes a selected application of a space

> Body parameter

<h3 id="movespaceapplicationorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space id|
|appId|path|string|true|Application id|
|body|body|object|false|none|
|» transition|body|integer(int32)|true|Move transition: 1 to move up, -1 to move down|

<h3 id="movespaceapplicationorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Request fulfilled|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSpaceApplication_1

<a id="opIddeleteSpaceApplication_1"></a>

`DELETE /v1/social/spaces/{id}/applications/{appId}`

*Deletes a selected application of a space*

Deletes a selected application of a space

<h3 id="deletespaceapplication_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space id|
|appId|path|string|true|Application id|

<h3 id="deletespaceapplication_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Request fulfilled|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpaceAvatarById

<a id="opIdgetSpaceAvatarById"></a>

`GET /v1/social/spaces/{id}/avatar`

*Gets a space avatar by pretty name*

This can only be done by the logged in user.

<h3 id="getspaceavatarbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lastModified|query|string|false|The value of lastModified parameter will determine whether the query should be cached by browser or not. If not set, no 'expires HTTP Header will be sent'|
|id|path|string|true|Space pretty name|
|r|query|string|false|A mandatory valid token that is used to authorize anonymous request|

<h3 id="getspaceavatarbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpaceBannerById

<a id="opIdgetSpaceBannerById"></a>

`GET /v1/social/spaces/{id}/banner`

*Gets a space banner by id*

This can only be done by the logged in user.

<h3 id="getspacebannerbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|lastModified|query|string|false|The value of lastModified parameter will determine whether the query should be cached by browser or not. If not set, no 'expires HTTP Header will be sent'|
|id|path|string|true|Space id|
|r|query|string|false|A mandatory valid token that is used to authorize anonymous request|

<h3 id="getspacebannerbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpaceExternalInvitations

<a id="opIdgetSpaceExternalInvitations"></a>

`GET /v1/social/spaces/{id}/externalInvitations`

*Gets external invitations of a specific space*

This returns a list of external invitations if the authenticated user is a member or manager of the space or a spaces super manager.

<h3 id="getspaceexternalinvitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space id|

<h3 id="getspaceexternalinvitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpaceNavigations

<a id="opIdgetSpaceNavigations"></a>

`GET /v1/social/spaces/{id}/navigations`

*Return list of navigations of a space*

Return list of navigations of a space

<h3 id="getspacenavigations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space id|

<h3 id="getspacenavigations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Request fulfilled|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpaceMembers

<a id="opIdgetSpaceMembers"></a>

`GET /v1/social/spaces/{id}/users`

*Gets users of a specific space*

This returns a list of users if the authenticated user is a member or manager of the space or a spaces super manager.

<h3 id="getspacemembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space id|
|q|query|string|false|User name search information|
|role|query|string|false|Role of the target user in this space: manager, member, invited and pending|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|returnSize|query|boolean|false|Returning the number of users or not|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="getspacemembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## isSpaceMember

<a id="opIdisSpaceMember"></a>

`GET /v1/social/spaces/{id}/users/{userId}`

*Checks if the given user is a member of a specific space or not*

This Checks if user is a member of a specific spacer o not.

<h3 id="isspacemember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space id|
|userId|path|string|true|User id|

<h3 id="isspacemember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## isSpaceContainsExternals

<a id="opIdisSpaceContainsExternals"></a>

`GET /v1/social/spaces/{spaceId}/checkExternals`

*Checks if a specific a space contains an external members*

This returns the space if it contains external members

<h3 id="isspacecontainsexternals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|spaceId|path|string|true|Space Id|

<h3 id="isspacecontainsexternals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="social-rest-api-v1-social-spacesmemberships">v1/social/spacesMemberships</h1>

Managing memberships of users in a space

## getSpacesMemberships

<a id="opIdgetSpacesMemberships"></a>

`GET /v1/social/spacesMemberships`

*Gets space memberships*

This returns space memberships in the following cases: <br/><ul><li>the sender of the space membership is the authenticated user</li><li>the authenticated user is a manager of the space</li><li>the authenticated user is the super user</li></ul>

<h3 id="getspacesmemberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|space|query|string|false|Space display name to get membership, ex: my space|
|user|query|string|false|User name to filter only memberships of the given user|
|status|query|string|false|Type of membership to get (All, Pending, Approved, Invited)|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|
|returnSize|query|boolean|false|Returning the number of memberships or not|

<h3 id="getspacesmemberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## addSpacesMemberships

<a id="opIdaddSpacesMemberships"></a>

`POST /v1/social/spacesMemberships`

*Creates a space membership for a specific user*

This creates the space membership in the following cases: <br/><ul><li>the sender of the space membership is the authenticated user and the space subscription is open</li><li>the authenticated user is a manager of the space</li><li>the authenticated user is a spaces super manager</li></ul>

> Body parameter

<h3 id="addspacesmemberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|
|body|body|[SpaceMembershipEntity](#schemaspacemembershipentity)|true|Space membership object to be created, ex:<br />{<br />"role": "manager",<br />"user": "john",<br />"space": "my space"<br />}|

<h3 id="addspacesmemberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpaceMembershipById

<a id="opIdgetSpaceMembershipById"></a>

`GET /v1/social/spacesMemberships/{id}`

*Gets a specific space membership by id*

This returns the space membership in the following cases: <br/><ul><li>the user of the space membership is the authenticated user</li><li>the authenticated user is a manager of the space</li><li>the authenticated user is a spaces super manager</li></ul>

<h3 id="getspacemembershipbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space membership id which is in format spaceName:userName:role, ex: my_space:root:manager|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="getspacemembershipbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error due to data encoding|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateSpaceMembershipById

<a id="opIdupdateSpaceMembershipById"></a>

`PUT /v1/social/spacesMemberships/{id}`

*Updates a specific space membership by id*

This updates the space membership in the following cases: <br/><ul><li>the user of the space membership is the authenticated user but he cannot update his own membership to "approved" for a space with a "validation" subscription</li><li>the authenticated user is a manager of the space</li><li>the authenticated user is a spaces super manager</li><li>the user of the space membership is the authenticated user, he can update his own membership to "approved" or "ignored" for a space with a "closed" subscription</li></ul>

> Body parameter

<h3 id="updatespacemembershipbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space membership id which is in format spaceName:userName:role, ex: my_space:root:manager|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|
|body|body|[SpaceMembershipEntity](#schemaspacemembershipentity)|true|Space membership object to be updated|

<h3 id="updatespacemembershipbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error due to data encoding|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteSpaceMembershipById

<a id="opIddeleteSpaceMembershipById"></a>

`DELETE /v1/social/spacesMemberships/{id}`

*Deletes a specific space membership by id*

This deletes the space membership in the following cases: <br/><ul><li>the user of the space membership is the authenticated user</li><li>the authenticated user is a manager of the space</li><li>the authenticated user is a spaces super manager</li></ul>

<h3 id="deletespacemembershipbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Space membership id which is in format spaceName:userName:role, ex: my_space:root:manager|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="deletespacemembershipbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|412|[Precondition Failed](https://tools.ietf.org/html/rfc7232#section-4.2)|Precondition is not acceptable. For instance, the last manager membership could not be removed.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error due to data encoding|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="social-rest-api-v1-social-spacesadministration">v1/social/spacesAdministration</h1>

Managing Spaces Administration settings

## getAllSettings

<a id="opIdgetAllSettings"></a>

`GET /v1/social/spacesAdministration/permissions`

*Gets all spaces administrators permissions settings*

This returns space memberships in the following cases: <br/><ul><li>the sender of the space membership is the authenticated user</li><li>the authenticated user is a manager of the space</li><li>the authenticated user is the super user</li></ul>

<h3 id="getallsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|User unauthorized|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## canCreatespaces

<a id="opIdcanCreatespaces"></a>

`GET /v1/social/spacesAdministration/permissions/canCreatespaces/{username}`

*Check if members can create spaces*

This returns if members can add spaces

<h3 id="cancreatespaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|Username|

<h3 id="cancreatespaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|User not authorized to call this endpoint|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpacesAdministrators

<a id="opIdgetSpacesAdministrators"></a>

`GET /v1/social/spacesAdministration/permissions/spacesAdministrators`

*Gets spaces administrators memberships*

This returns space memberships in the following cases: <br/><ul><li>the sender of the space membership is the authenticated user</li><li>the authenticated user is a manager of the space</li><li>the authenticated user is the super user</li></ul>

<h3 id="getspacesadministrators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|User not authorized to call this endpoint|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateSpacesAdministrators

<a id="opIdupdateSpacesAdministrators"></a>

`PUT /v1/social/spacesAdministration/permissions/spacesAdministrators`

*Updates spaces creators memberships*

This updates the space membership in the following cases: <br/><ul><li>the user of the space membership is the authenticated user  but he cannot update his own membership to "approved" for a space with a "validation" subscription</li><li>the authenticated user is a manager of the space</li><li>the authenticated user is a spaces super manager</li></ul>

> Body parameter

<h3 id="updatespacesadministrators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MembershipEntityWrapper](#schemamembershipentitywrapper)|true|Space membership object to be updated|

<h3 id="updatespacesadministrators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|User not authorized to call this endpoint|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpacesCreators

<a id="opIdgetSpacesCreators"></a>

`GET /v1/social/spacesAdministration/permissions/spacesCreators`

*Gets spaces creators memberships*

This returns space memberships in the following cases: <br/><ul><li>the sender of the space membership is the authenticated user</li><li>the authenticated user is a manager of the space</li><li>the authenticated user is the super user</li></ul>

<h3 id="getspacescreators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|User not authorized to call this endpoint|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateSpacesCreators

<a id="opIdupdateSpacesCreators"></a>

`PUT /v1/social/spacesAdministration/permissions/spacesCreators`

*Updates spaces creators memberships*

This updates the space membership in the following cases: <br/><ul><li>the user of the space membership is the authenticated user  but he cannot update his own membership to "approved" for a space with a "validation" subscription</li><li>the authenticated user is a manager of the space</li><li>the authenticated user is a spaces super manager</li></ul>

> Body parameter

<h3 id="updatespacescreators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MembershipEntityWrapper](#schemamembershipentitywrapper)|true|Space membership object to be updated|

<h3 id="updatespacescreators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|User not authorized to call this endpoint|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="social-rest-api-v1-social-spacetemplates">v1/social/spaceTemplates</h1>

Managing Spaces Templates

## getAllTemplates

<a id="opIdgetAllTemplates"></a>

`GET /v1/social/spaceTemplates/templates`

*Gets all spaces templates*

This returns space templates details

<h3 id="getalltemplates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getBannerStream

<a id="opIdgetBannerStream"></a>

`GET /v1/social/spaceTemplates/{templateName}/banner`

*Gets space template banner*

This returns space template banner input stream

<h3 id="getbannerstream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|templateName|path|string|true|Space template name|
|lastModified|query|string|false|The value of lastModified parameter will determine whether the query should be cached by browser or not. If not set, no 'expires HTTP Header will be sent'|

<h3 id="getbannerstream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="social-rest-api-v1-social-tags">v1/social/tags</h1>

Managing tags for any type of data

## findTags

<a id="opIdfindTags"></a>

`GET /v1/social/tags`

*Find list of tags using a search term*

Returns list of tags

<h3 id="findtags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|Search term|
|limit|query|integer(int64)|false|Search results limit|

<h3 id="findtags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="social-rest-api-v1-social-users">v1/social/users</h1>

Operations on users with their activities, connections and spaces

## getUsers

<a id="opIdgetUsers"></a>

`GET /v1/social/users`

*Gets all users*

Using the query param "q" to filter the target users, ex: "q=jo*" returns all the users beginning by "jo".Using the query param "status" to filter the target users, ex: "status=online*" returns the visible online users.Using the query params "status" and "spaceId" together to filter the target users, ex: "status=online*" and "spaceId=1*" returns the visible online users who are member of space with id=1.The params "status" and "spaceId" cannot be used with "q" param since it will falsify the "limit" param which is 20 by default. If these 3 parameters are used together, the parameter "q" will be ignored

<h3 id="getusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|User name information to filter, ex: user name, last name, first name or full name|
|status|query|string|false|User status to filter online users, ex: online|
|userType|query|string|false|User type to filter, ex: internal, external|
|isConnected|query|string|false|Is connected users|
|spaceId|query|string|false|Space id to filter only its members, ex: 1|
|isDisabled|query|boolean|false|Is disabled users|
|enrollmentStatus|query|string|false|Enrollment status, ex: enrolled, not enrolled, no possible enrollment|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|returnSize|query|boolean|false|Returning the number of users found or not|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="getusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error due to data encoding|None|

<aside class="success">
This operation does not require authentication
</aside>

## addUser

<a id="opIdaddUser"></a>

`POST /v1/social/users`

*Creates a new user*

This creates the user if the authenticated user is in the /platform/administrators group.

> Body parameter

<h3 id="adduser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|
|body|body|[UserEntity](#schemauserentity)|true|User object to be created, ex:<br />{<br />"username": "john",<br />"password": "gtngtn",<br />"email": "john@exoplatform.com",<br />"firstname": "John",<br />"lastname": "Smith"<br />}|

<h3 id="adduser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|

<aside class="success">
This operation does not require authentication
</aside>

## bulk

<a id="opIdbulk"></a>

`PATCH /v1/social/users/bulk/{action}`

*Make action on list of users*

This will realize the action on the list of users if possible

> Body parameter

<h3 id="bulk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|action|path|string|true|Action|
|body|body|array[string]|true|User List|

> Example responses

<h3 id="bulk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="bulk-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getInvitationsOfUser

<a id="opIdgetInvitationsOfUser"></a>

`GET /v1/social/users/connections/invitations`

*Gets received invitations of current user*

This can only be done by the logged in user.

<h3 id="getinvitationsofuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|returnSize|query|boolean|false|Returning the number of connections or not|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

> Example responses

<h3 id="getinvitationsofuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getinvitationsofuser-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getPendingOfUser

<a id="opIdgetPendingOfUser"></a>

`GET /v1/social/users/connections/pending`

*Gets received invitations of current user*

This can only be done by the logged in user.

<h3 id="getpendingofuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|returnSize|query|boolean|false|Returning the number of connections or not|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

> Example responses

<h3 id="getpendingofuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getpendingofuser-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## importUsers

<a id="opIdimportUsers"></a>

`POST /v1/social/users/csv`

*Import users using CSV file*

Import users using CSV file that has a header defining user fields names.exemple of first line of CSV file: userName,firstName,lastName,password,email,groups,aboutMe,timeZone,company,position

> Body parameter

<h3 id="importusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» uploadId|body|string|true|CSV File uploadId retrieved after uploading|
|» progress|body|boolean|false|Get processing progress percentage of imported file|
|» clean|body|boolean|false|Whether clean file after processing or not|
|» sync|body|boolean|false|Whether process importing users in a sync or async way of current request|

> Example responses

<h3 id="importusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="importusers-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getUserByEmail

<a id="opIdgetUserByEmail"></a>

`GET /v1/social/users/email/{email}`

*Gets a specific user by user email*

This can only be done by the logged in user.

<h3 id="getuserbyemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|path|string|true|User email|

<h3 id="getuserbyemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error due to data encoding|None|

<aside class="success">
This operation does not require authentication
</aside>

## sendOnBoardingEmail

<a id="opIdsendOnBoardingEmail"></a>

`PATCH /v1/social/users/onboard/{id}`

*Send onBoarding email to a specific user*

This send onBoarding email to a specific user.

<h3 id="sendonboardingemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User name|

> Example responses

<h3 id="sendonboardingemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="sendonboardingemail-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getUserById

<a id="opIdgetUserById"></a>

`GET /v1/social/users/{id}`

*Gets a specific user by user name*

This can only be done by the logged in user.

<h3 id="getuserbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User name|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="getuserbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error due to data encoding|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateUserById

<a id="opIdupdateUserById"></a>

`PUT /v1/social/users/{id}`

*Updates a specific user by user name*

This updates the user if he is the authenticated user.

> Body parameter

<h3 id="updateuserbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User name|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|
|body|body|[UserEntity](#schemauserentity)|true|User object to be updated, ex:<br />{<br />"username": "john",<br />"password": "gtngtn",<br />"email": "john@exoplatform.com",<br />"firstname": "John",<br />"lastname": "Smith"<br />}|

> Example responses

<h3 id="updateuserbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="updateuserbyid-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## deleteUserById

<a id="opIddeleteUserById"></a>

`DELETE /v1/social/users/{id}`

*Deletes a specific user by user name*

This deletes the user if the authenticated user is in the /platform/administrators group.

<h3 id="deleteuserbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User name|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

> Example responses

<h3 id="deleteuserbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="deleteuserbyid-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## updateUserProfileAttribute

<a id="opIdupdateUserProfileAttribute"></a>

`PATCH /v1/social/users/{id}`

*Update user property*

This can only be done by the logged in user.

> Body parameter

<h3 id="updateuserprofileattribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User name|
|body|body|object|false|none|
|» name|body|string|true|User profile attribute name|
|» value|body|string|true|User profile attribute value|

<h3 id="updateuserprofileattribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Request fulfilled but not content returned|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unothorized to modify user profile|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error due to data encoding|None|

<aside class="success">
This operation does not require authentication
</aside>

## getActivitiesOfUser

<a id="opIdgetActivitiesOfUser"></a>

`GET /v1/social/users/{id}/activities`

*Gets activities of a specific user*

This returns an activity in the list in the following cases: <br/><ul><li>this is a user activity and the owner of the activity is the authenticated user or one of his connections</li><li>this is a space activity and the authenticated user is a member of the space</li></ul>

<h3 id="getactivitiesofuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User name|
|type|query|string|false|Activity stream type, ex: <em>owner, connections, spaces</em> or <em>all</em>|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|before|query|string|false|Base time to load older activities (yyyy-MM-dd HH:mm:ss)|
|after|query|string|false|Base time to load newer activities (yyyy-MM-dd HH:mm:ss)|
|returnSize|query|boolean|false|Returning the number of activities or not|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: <em>comments</em> or <em>likes</em>|

> Example responses

<h3 id="getactivitiesofuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getactivitiesofuser-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## addActivityByUser

<a id="opIdaddActivityByUser"></a>

`POST /v1/social/users/{id}/activities`

*Creates an activity by a specific user*

This creates the activity if the given user is the authenticated user.

> Body parameter

<h3 id="addactivitybyuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User name|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: <em>comments</em> or <em>likes</em>|
|body|body|[ActivityEntity](#schemaactivityentity)|true|Activity object to be created, in which the title of activity is required, ex: <br/>{"title": "act4 posted"}|

> Example responses

<h3 id="addactivitybyuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="addactivitybyuser-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getUserAvatarById

<a id="opIdgetUserAvatarById"></a>

`GET /v1/social/users/{id}/avatar`

*Gets a specific user avatar by username*

The user avatar will be returned only if there is a currently authenticated user or an anonymous user that has a valid token generated by a Server encryption key.

<h3 id="getuseravatarbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User name|
|lastModified|query|string|false|The value of lastModified parameter will determine whether the query should be cached by browser or not. If not set, no 'expires HTTP Header will be sent'|
|r|query|string|false|A mandatory valid token that is used to authorize anonymous request|

<h3 id="getuseravatarbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error due to data encoding|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUserBannerById

<a id="opIdgetUserBannerById"></a>

`GET /v1/social/users/{id}/banner`

*Gets a specific user banner by username*

The user avatar will be returned only if there is a currently authenticated user or an anonymous user that has a valid token generated by a Server encryption key.

<h3 id="getuserbannerbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User name|
|lastModified|query|string|false|The value of lastModified parameter will determine whether the query should be cached by browser or not. If not set, no 'expires HTTP Header will be sent'|
|r|query|string|false|A mandatory valid token that is used to authorize anonymous request|

<h3 id="getuserbannerbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Resource not found|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error due to data encoding|None|

<aside class="success">
This operation does not require authentication
</aside>

## getConnectionsOfUser

<a id="opIdgetConnectionsOfUser"></a>

`GET /v1/social/users/{id}/connections`

*Gets connections of a specific user*

This can only be done by the logged in user.

<h3 id="getconnectionsofuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User name|
|q|path|string|true|User name information to filter, ex: user name, last name, first name or full name|
|returnSize|query|boolean|false|Returning the number of connections or not|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

> Example responses

<h3 id="getconnectionsofuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getconnectionsofuser-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## updateUserProfileAttributes

<a id="opIdupdateUserProfileAttributes"></a>

`PATCH /v1/social/users/{id}/profile`

*Update set of properties in user profile*

This can only be done by the logged in user.

> Body parameter

<h3 id="updateuserprofileattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User name|
|body|body|[ProfileEntity](#schemaprofileentity)|true|User profile attributes map|

<h3 id="updateuserprofileattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|Request fulfilled but not content returned|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Unothorized to modify user profile|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error due to data encoding|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSpacesOfUser

<a id="opIdgetSpacesOfUser"></a>

`GET /v1/social/users/{id}/spaces`

*Gets spaces of a specific user*

This returns a list of spaces in the following cases: <br/><ul><li>the given user is the authenticated user</li><li>the authenticated user is in the group /platform/administrators</li></ul>

<h3 id="getspacesofuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User name|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|returnSize|query|boolean|false|Returning the number of spaces or not|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: <em>members</em> or <em>managers</em>|

> Example responses

<h3 id="getspacesofuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getspacesofuser-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## getCommonSpacesOfUser

<a id="opIdgetCommonSpacesOfUser"></a>

`GET /v1/social/users/{userId}/spaces/{profileId}`

*Gets commons spaces of current user*

This returns a list of commons spaces in the following cases: <br/><ul><li>the given user is the authenticated user</li><li>the authenticated user is in the group /platform/administrators</li></ul>

<h3 id="getcommonspacesofuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|User Id|
|profileId|path|string|true|Profile Id|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|returnSize|query|boolean|false|Returning the number of spaces or not|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: <em>members</em> or <em>managers</em>|

> Example responses

<h3 id="getcommonspacesofuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|default response|None|

<h3 id="getcommonspacesofuser-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="social-rest-api-v1-social-usersrelationships">v1/social/usersRelationships</h1>

Managing relationships of users

## getUsersRelationships

<a id="opIdgetUsersRelationships"></a>

`GET /v1/social/usersRelationships`

*Gets all user relationships*

This returns a list of relationships in the following cases: <br/><ul><li>if the query param "user" is not defined: returns the relationships of the authenticated user</li><li>if the "user" is defined and the authenticated user is not an administrator: returns the relationships of the authenticated user</li><li>if the "user" is defined and the authenticated user is an administrator: returns the relationships of the defined user</li><li>if the "others" is defined: returns the relationships between the user and the users defined in "others" only</li></ul>

<h3 id="getusersrelationships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|Specific status of relationships: pending, confirmed or all|
|user|query|string|false|User name to get relationships|
|others|query|string|false|Usernames of the others users to get relationships with the given user|
|offset|query|integer(int32)|false|Offset|
|limit|query|integer(int32)|false|Limit|
|returnSize|query|boolean|false|Returning the number of relationships or not|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: sender or receiver|

<h3 id="getusersrelationships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateUsersRelationship

<a id="opIdupdateUsersRelationship"></a>

`PUT /v1/social/usersRelationships`

*Updates a specific relationship of two users. One of them must be the current user.*

Return updated relationship

> Body parameter

<h3 id="updateusersrelationship-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: sender or receiver|
|body|body|[RelationshipEntity](#schemarelationshipentity)|true|Relationship object to be updated|

<h3 id="updateusersrelationship-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## createUsersRelationships

<a id="opIdcreateUsersRelationships"></a>

`POST /v1/social/usersRelationships`

*Creates a relationship between two specific users*

This creates the relationship in the following cases: <br/><ul><li>the sender or the receiver of the user relationship is the authenticated user</li><li>the authenticated user is in the group /platform/administrators</li></ul>

> Body parameter

<h3 id="createusersrelationships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: sender or receiver|
|body|body|[RelationshipEntity](#schemarelationshipentity)|true|Relationship object to be created, required fields: <br/>sender - user name of the sender,<br/>receiver - user name of the receiver,<br/>status - pending or confirmed|

<h3 id="createusersrelationships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUsersRelationshipsById

<a id="opIdgetUsersRelationshipsById"></a>

`GET /v1/social/usersRelationships/{id}`

*Gets a specific relationship of user by id*

This returns the relationship in the following cases: <br/><ul><li>the sender or the receiver of the user relationship is the authenticated user</li><li>the authenticated user is in the group /platform/administrators</li></ul>

<h3 id="getusersrelationshipsbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Relationship id|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: sender or receiver|

<h3 id="getusersrelationshipsbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateUsersRelationshipsById

<a id="opIdupdateUsersRelationshipsById"></a>

`PUT /v1/social/usersRelationships/{id}`

*Updates a specific relationship of user by id*

This updates the relationship in the following cases: <br/><ul><li>the sender or the receiver of the user relationship is the authenticated user</li><li>the authenticated user is in the group /platform/administrators</li></ul>

> Body parameter

<h3 id="updateusersrelationshipsbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Relationship id|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: sender or receiver|
|body|body|[RelationshipEntity](#schemarelationshipentity)|true|Relationship object to be updated|

<h3 id="updateusersrelationshipsbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteUsersRelationshipsById

<a id="opIddeleteUsersRelationshipsById"></a>

`DELETE /v1/social/usersRelationships/{id}`

*Deletes a specific relationship of user by id*

This deletes the relationship in the following cases: <br/><ul><li>the sender or the receiver of the user relationship is the authenticated user</li><li>the authenticated user is in the group /platform/administrators</li></ul>

<h3 id="deleteusersrelationshipsbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Relationship id|
|expand|query|string|false|Asking for a full representation of a specific subresource if any|

<h3 id="deleteusersrelationshipsbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## getUsersRelationship

<a id="opIdgetUsersRelationship"></a>

`GET /v1/social/usersRelationships/{sender}/{receiver}`

*Gets a specific relationship of user with another user*

This returns the relationship in the following cases: <br/><ul><li>the sender or the receiver of the user relationship is the authenticated user</li><li>the authenticated user is in the group /platform/administrators</li></ul>

<h3 id="getusersrelationship-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sender|path|string|true|Relationship id|
|receiver|path|string|true|Relationship id|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: sender or receiver|

<h3 id="getusersrelationship-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## deleteUsersRelationship

<a id="opIddeleteUsersRelationship"></a>

`DELETE /v1/social/usersRelationships/{sender}/{receiver}`

*Deletes a specific relationship of two users.One of them must be currrent user*

Return the deleted relationship

<h3 id="deleteusersrelationship-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sender|path|string|true|Relationship sender|
|receiver|path|string|true|Relationship receiver|
|expand|query|string|false|Asking for a full representation of a specific subresource, ex: sender or receiver|

<h3 id="deleteusersrelationship-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request fulfilled|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Invalid query input|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ActivityEntity">ActivityEntity</h2>
<!-- backwards compatibility -->
<a id="schemaactivityentity"></a>
<a id="schema_ActivityEntity"></a>
<a id="tocSactivityentity"></a>
<a id="tocsactivityentity"></a>

```json
{
  "activityStream": {
    "empty": true,
    "property1": {},
    "property2": {}
  },
  "attachments": {
    "activityStream": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "attachments": {},
    "body": "string",
    "canDelete": true,
    "canEdit": true,
    "comments": "string",
    "commentsCount": 0,
    "createDate": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "files": [
      {
        "deleted": true,
        "destinationFolder": "string",
        "id": "string",
        "inputStream": {},
        "lastModified": 0,
        "mimeType": "string",
        "name": "string",
        "storage": "string",
        "uploadId": "string"
      }
    ],
    "hasCommented": true,
    "hasLiked": true,
    "href": "string",
    "id": "string",
    "identity": "string",
    "lastUpdatedTime": 0,
    "likes": "string",
    "likesCount": 0,
    "link": "string",
    "mentions": {},
    "metadatas": {
      "property1": [
        {
          "audienceId": 0,
          "creatorId": 0,
          "id": 0,
          "name": "string",
          "objectId": "string",
          "objectType": "string",
          "parentObjectId": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "property2": [
        {
          "audienceId": 0,
          "creatorId": 0,
          "id": 0,
          "name": "string",
          "objectId": "string",
          "objectType": "string",
          "parentObjectId": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    },
    "originalActivity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "owner": "string",
    "priority": "string",
    "read": "string",
    "shareActions": [
      {
        "activityId": 0,
        "id": 0,
        "message": "string",
        "shareDate": 0,
        "sharedActivityIds": [
          0
        ],
        "spaceIds": [
          0
        ],
        "userIdentityId": 0
      }
    ],
    "sharedActions": {},
    "targetSpaces": [
      "string"
    ],
    "templateParams": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "title": "string",
    "titleId": "string",
    "type": "string",
    "updateDate": "string"
  },
  "body": "string",
  "canDelete": true,
  "canEdit": true,
  "comments": "string",
  "commentsCount": 0,
  "createDate": "string",
  "dataEntity": {
    "empty": true,
    "property1": {},
    "property2": {}
  },
  "files": [
    {
      "deleted": true,
      "destinationFolder": "string",
      "id": "string",
      "inputStream": {},
      "lastModified": 0,
      "mimeType": "string",
      "name": "string",
      "storage": "string",
      "uploadId": "string"
    }
  ],
  "hasCommented": true,
  "hasLiked": true,
  "href": "string",
  "id": "string",
  "identity": "string",
  "lastUpdatedTime": 0,
  "likes": "string",
  "likesCount": 0,
  "link": "string",
  "mentions": {
    "activityStream": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "attachments": {},
    "body": "string",
    "canDelete": true,
    "canEdit": true,
    "comments": "string",
    "commentsCount": 0,
    "createDate": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "files": [
      {
        "deleted": true,
        "destinationFolder": "string",
        "id": "string",
        "inputStream": {},
        "lastModified": 0,
        "mimeType": "string",
        "name": "string",
        "storage": "string",
        "uploadId": "string"
      }
    ],
    "hasCommented": true,
    "hasLiked": true,
    "href": "string",
    "id": "string",
    "identity": "string",
    "lastUpdatedTime": 0,
    "likes": "string",
    "likesCount": 0,
    "link": "string",
    "mentions": {},
    "metadatas": {
      "property1": [
        {
          "audienceId": 0,
          "creatorId": 0,
          "id": 0,
          "name": "string",
          "objectId": "string",
          "objectType": "string",
          "parentObjectId": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "property2": [
        {
          "audienceId": 0,
          "creatorId": 0,
          "id": 0,
          "name": "string",
          "objectId": "string",
          "objectType": "string",
          "parentObjectId": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    },
    "originalActivity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "owner": "string",
    "priority": "string",
    "read": "string",
    "shareActions": [
      {
        "activityId": 0,
        "id": 0,
        "message": "string",
        "shareDate": 0,
        "sharedActivityIds": [
          0
        ],
        "spaceIds": [
          0
        ],
        "userIdentityId": 0
      }
    ],
    "sharedActions": {},
    "targetSpaces": [
      "string"
    ],
    "templateParams": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "title": "string",
    "titleId": "string",
    "type": "string",
    "updateDate": "string"
  },
  "metadatas": {
    "property1": [
      {
        "audienceId": 0,
        "creatorId": 0,
        "id": 0,
        "name": "string",
        "objectId": "string",
        "objectType": "string",
        "parentObjectId": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "property2": [
      {
        "audienceId": 0,
        "creatorId": 0,
        "id": 0,
        "name": "string",
        "objectId": "string",
        "objectType": "string",
        "parentObjectId": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  },
  "originalActivity": {
    "empty": true,
    "property1": {},
    "property2": {}
  },
  "owner": "string",
  "priority": "string",
  "read": "string",
  "shareActions": [
    {
      "activityId": 0,
      "id": 0,
      "message": "string",
      "shareDate": 0,
      "sharedActivityIds": [
        0
      ],
      "spaceIds": [
        0
      ],
      "userIdentityId": 0
    }
  ],
  "sharedActions": {
    "activityStream": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "attachments": {},
    "body": "string",
    "canDelete": true,
    "canEdit": true,
    "comments": "string",
    "commentsCount": 0,
    "createDate": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "files": [
      {
        "deleted": true,
        "destinationFolder": "string",
        "id": "string",
        "inputStream": {},
        "lastModified": 0,
        "mimeType": "string",
        "name": "string",
        "storage": "string",
        "uploadId": "string"
      }
    ],
    "hasCommented": true,
    "hasLiked": true,
    "href": "string",
    "id": "string",
    "identity": "string",
    "lastUpdatedTime": 0,
    "likes": "string",
    "likesCount": 0,
    "link": "string",
    "mentions": {},
    "metadatas": {
      "property1": [
        {
          "audienceId": 0,
          "creatorId": 0,
          "id": 0,
          "name": "string",
          "objectId": "string",
          "objectType": "string",
          "parentObjectId": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "property2": [
        {
          "audienceId": 0,
          "creatorId": 0,
          "id": 0,
          "name": "string",
          "objectId": "string",
          "objectType": "string",
          "parentObjectId": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    },
    "originalActivity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "owner": "string",
    "priority": "string",
    "read": "string",
    "shareActions": [
      {
        "activityId": 0,
        "id": 0,
        "message": "string",
        "shareDate": 0,
        "sharedActivityIds": [
          0
        ],
        "spaceIds": [
          0
        ],
        "userIdentityId": 0
      }
    ],
    "sharedActions": {},
    "targetSpaces": [
      "string"
    ],
    "templateParams": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "title": "string",
    "titleId": "string",
    "type": "string",
    "updateDate": "string"
  },
  "targetSpaces": [
    "string"
  ],
  "templateParams": {
    "empty": true,
    "property1": {},
    "property2": {}
  },
  "title": "string",
  "titleId": "string",
  "type": "string",
  "updateDate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityStream|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» empty|boolean|false|none|none|
|attachments|[ActivityEntity](#schemaactivityentity)|false|none|none|
|body|string|false|none|none|
|canDelete|boolean|false|none|none|
|canEdit|boolean|false|none|none|
|comments|string|false|none|none|
|commentsCount|integer(int32)|false|none|none|
|createDate|string|false|none|none|
|dataEntity|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» empty|boolean|false|none|none|
|files|[[ActivityFile](#schemaactivityfile)]|false|none|none|
|hasCommented|boolean|false|none|none|
|hasLiked|boolean|false|none|none|
|href|string|false|none|none|
|id|string|false|none|none|
|identity|string|false|none|none|
|lastUpdatedTime|integer(int64)|false|none|none|
|likes|string|false|none|none|
|likesCount|integer(int32)|false|none|none|
|link|string|false|none|none|
|mentions|[ActivityEntity](#schemaactivityentity)|false|none|none|
|metadatas|object|false|none|none|
|» **additionalProperties**|[[MetadataItemEntity](#schemametadataitementity)]|false|none|none|
|originalActivity|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» empty|boolean|false|none|none|
|owner|string|false|none|none|
|priority|string|false|none|none|
|read|string|false|none|none|
|shareActions|[[ActivityShareAction](#schemaactivityshareaction)]|false|none|none|
|sharedActions|[ActivityEntity](#schemaactivityentity)|false|none|none|
|targetSpaces|[string]|false|none|none|
|templateParams|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» empty|boolean|false|none|none|
|title|string|false|none|none|
|titleId|string|false|none|none|
|type|string|false|none|none|
|updateDate|string|false|none|none|

<h2 id="tocS_ActivityFile">ActivityFile</h2>
<!-- backwards compatibility -->
<a id="schemaactivityfile"></a>
<a id="schema_ActivityFile"></a>
<a id="tocSactivityfile"></a>
<a id="tocsactivityfile"></a>

```json
{
  "deleted": true,
  "destinationFolder": "string",
  "id": "string",
  "inputStream": {},
  "lastModified": 0,
  "mimeType": "string",
  "name": "string",
  "storage": "string",
  "uploadId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|boolean|false|none|none|
|destinationFolder|string|false|none|none|
|id|string|false|none|none|
|inputStream|object|false|none|none|
|lastModified|integer(int64)|false|none|none|
|mimeType|string|false|none|none|
|name|string|false|none|none|
|storage|string|false|none|none|
|uploadId|string|false|none|none|

<h2 id="tocS_ActivityShareAction">ActivityShareAction</h2>
<!-- backwards compatibility -->
<a id="schemaactivityshareaction"></a>
<a id="schema_ActivityShareAction"></a>
<a id="tocSactivityshareaction"></a>
<a id="tocsactivityshareaction"></a>

```json
{
  "activityId": 0,
  "id": 0,
  "message": "string",
  "shareDate": 0,
  "sharedActivityIds": [
    0
  ],
  "spaceIds": [
    0
  ],
  "userIdentityId": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityId|integer(int64)|false|none|none|
|id|integer(int64)|false|none|none|
|message|string|false|none|none|
|shareDate|integer(int64)|false|none|none|
|sharedActivityIds|[integer]|false|none|none|
|spaceIds|[integer]|false|none|none|
|userIdentityId|integer(int64)|false|none|none|

<h2 id="tocS_Application">Application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "accessPermissions": [
    "string"
  ],
  "applicationName": "string",
  "categoryName": "string",
  "contentId": "string",
  "createdDate": "2019-08-24T14:15:22Z",
  "description": "string",
  "displayName": "string",
  "iconURL": "string",
  "id": "string",
  "modifiedDate": "2019-08-24T14:15:22Z",
  "storageId": "string",
  "type": {
    "contentType": {
      "mimeType": "string"
    },
    "name": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessPermissions|[string]|false|none|none|
|applicationName|string|false|none|none|
|categoryName|string|false|none|none|
|contentId|string|false|none|none|
|createdDate|string(date-time)|false|none|none|
|description|string|false|none|none|
|displayName|string|false|none|none|
|iconURL|string|false|none|none|
|id|string|false|none|none|
|modifiedDate|string(date-time)|false|none|none|
|storageId|string|false|none|none|
|type|[ApplicationTypeObject](#schemaapplicationtypeobject)|false|none|none|

<h2 id="tocS_ApplicationTypeObject">ApplicationTypeObject</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationtypeobject"></a>
<a id="schema_ApplicationTypeObject"></a>
<a id="tocSapplicationtypeobject"></a>
<a id="tocsapplicationtypeobject"></a>

```json
{
  "contentType": {
    "mimeType": "string"
  },
  "name": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|[ContentTypeObject](#schemacontenttypeobject)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_CommentEntity">CommentEntity</h2>
<!-- backwards compatibility -->
<a id="schemacommententity"></a>
<a id="schema_CommentEntity"></a>
<a id="tocScommententity"></a>
<a id="tocscommententity"></a>

```json
{
  "activity": "string",
  "activityId": "string",
  "activityStream": {
    "empty": true,
    "property1": {},
    "property2": {}
  },
  "attachments": {
    "activityStream": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "attachments": {},
    "body": "string",
    "canDelete": true,
    "canEdit": true,
    "comments": "string",
    "commentsCount": 0,
    "createDate": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "files": [
      {
        "deleted": true,
        "destinationFolder": "string",
        "id": "string",
        "inputStream": {},
        "lastModified": 0,
        "mimeType": "string",
        "name": "string",
        "storage": "string",
        "uploadId": "string"
      }
    ],
    "hasCommented": true,
    "hasLiked": true,
    "href": "string",
    "id": "string",
    "identity": "string",
    "lastUpdatedTime": 0,
    "likes": "string",
    "likesCount": 0,
    "link": "string",
    "mentions": {},
    "metadatas": {
      "property1": [
        {
          "audienceId": 0,
          "creatorId": 0,
          "id": 0,
          "name": "string",
          "objectId": "string",
          "objectType": "string",
          "parentObjectId": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "property2": [
        {
          "audienceId": 0,
          "creatorId": 0,
          "id": 0,
          "name": "string",
          "objectId": "string",
          "objectType": "string",
          "parentObjectId": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    },
    "originalActivity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "owner": "string",
    "priority": "string",
    "read": "string",
    "shareActions": [
      {
        "activityId": 0,
        "id": 0,
        "message": "string",
        "shareDate": 0,
        "sharedActivityIds": [
          0
        ],
        "spaceIds": [
          0
        ],
        "userIdentityId": 0
      }
    ],
    "sharedActions": {},
    "targetSpaces": [
      "string"
    ],
    "templateParams": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "title": "string",
    "titleId": "string",
    "type": "string",
    "updateDate": "string"
  },
  "body": "string",
  "canDelete": true,
  "canEdit": true,
  "comments": "string",
  "commentsCount": 0,
  "createDate": "string",
  "dataEntity": {
    "empty": true,
    "property1": {},
    "property2": {}
  },
  "files": [
    {
      "deleted": true,
      "destinationFolder": "string",
      "id": "string",
      "inputStream": {},
      "lastModified": 0,
      "mimeType": "string",
      "name": "string",
      "storage": "string",
      "uploadId": "string"
    }
  ],
  "hasCommented": true,
  "hasLiked": true,
  "href": "string",
  "id": "string",
  "identity": "string",
  "lastUpdatedTime": 0,
  "likes": "string",
  "likesCount": 0,
  "link": "string",
  "mentions": {
    "activityStream": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "attachments": {},
    "body": "string",
    "canDelete": true,
    "canEdit": true,
    "comments": "string",
    "commentsCount": 0,
    "createDate": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "files": [
      {
        "deleted": true,
        "destinationFolder": "string",
        "id": "string",
        "inputStream": {},
        "lastModified": 0,
        "mimeType": "string",
        "name": "string",
        "storage": "string",
        "uploadId": "string"
      }
    ],
    "hasCommented": true,
    "hasLiked": true,
    "href": "string",
    "id": "string",
    "identity": "string",
    "lastUpdatedTime": 0,
    "likes": "string",
    "likesCount": 0,
    "link": "string",
    "mentions": {},
    "metadatas": {
      "property1": [
        {
          "audienceId": 0,
          "creatorId": 0,
          "id": 0,
          "name": "string",
          "objectId": "string",
          "objectType": "string",
          "parentObjectId": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "property2": [
        {
          "audienceId": 0,
          "creatorId": 0,
          "id": 0,
          "name": "string",
          "objectId": "string",
          "objectType": "string",
          "parentObjectId": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    },
    "originalActivity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "owner": "string",
    "priority": "string",
    "read": "string",
    "shareActions": [
      {
        "activityId": 0,
        "id": 0,
        "message": "string",
        "shareDate": 0,
        "sharedActivityIds": [
          0
        ],
        "spaceIds": [
          0
        ],
        "userIdentityId": 0
      }
    ],
    "sharedActions": {},
    "targetSpaces": [
      "string"
    ],
    "templateParams": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "title": "string",
    "titleId": "string",
    "type": "string",
    "updateDate": "string"
  },
  "metadatas": {
    "property1": [
      {
        "audienceId": 0,
        "creatorId": 0,
        "id": 0,
        "name": "string",
        "objectId": "string",
        "objectType": "string",
        "parentObjectId": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      }
    ],
    "property2": [
      {
        "audienceId": 0,
        "creatorId": 0,
        "id": 0,
        "name": "string",
        "objectId": "string",
        "objectType": "string",
        "parentObjectId": "string",
        "properties": {
          "property1": "string",
          "property2": "string"
        }
      }
    ]
  },
  "originalActivity": {
    "empty": true,
    "property1": {},
    "property2": {}
  },
  "owner": "string",
  "parentCommentId": "string",
  "poster": "string",
  "priority": "string",
  "read": "string",
  "shareActions": [
    {
      "activityId": 0,
      "id": 0,
      "message": "string",
      "shareDate": 0,
      "sharedActivityIds": [
        0
      ],
      "spaceIds": [
        0
      ],
      "userIdentityId": 0
    }
  ],
  "sharedActions": {
    "activityStream": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "attachments": {},
    "body": "string",
    "canDelete": true,
    "canEdit": true,
    "comments": "string",
    "commentsCount": 0,
    "createDate": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "files": [
      {
        "deleted": true,
        "destinationFolder": "string",
        "id": "string",
        "inputStream": {},
        "lastModified": 0,
        "mimeType": "string",
        "name": "string",
        "storage": "string",
        "uploadId": "string"
      }
    ],
    "hasCommented": true,
    "hasLiked": true,
    "href": "string",
    "id": "string",
    "identity": "string",
    "lastUpdatedTime": 0,
    "likes": "string",
    "likesCount": 0,
    "link": "string",
    "mentions": {},
    "metadatas": {
      "property1": [
        {
          "audienceId": 0,
          "creatorId": 0,
          "id": 0,
          "name": "string",
          "objectId": "string",
          "objectType": "string",
          "parentObjectId": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        }
      ],
      "property2": [
        {
          "audienceId": 0,
          "creatorId": 0,
          "id": 0,
          "name": "string",
          "objectId": "string",
          "objectType": "string",
          "parentObjectId": "string",
          "properties": {
            "property1": "string",
            "property2": "string"
          }
        }
      ]
    },
    "originalActivity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "owner": "string",
    "priority": "string",
    "read": "string",
    "shareActions": [
      {
        "activityId": 0,
        "id": 0,
        "message": "string",
        "shareDate": 0,
        "sharedActivityIds": [
          0
        ],
        "spaceIds": [
          0
        ],
        "userIdentityId": 0
      }
    ],
    "sharedActions": {},
    "targetSpaces": [
      "string"
    ],
    "templateParams": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "title": "string",
    "titleId": "string",
    "type": "string",
    "updateDate": "string"
  },
  "targetSpaces": [
    "string"
  ],
  "templateParams": {
    "empty": true,
    "property1": {},
    "property2": {}
  },
  "title": "string",
  "titleId": "string",
  "type": "string",
  "updateDate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity|string|false|none|none|
|activityId|string|false|none|none|
|activityStream|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» empty|boolean|false|none|none|
|attachments|[ActivityEntity](#schemaactivityentity)|false|none|none|
|body|string|false|none|none|
|canDelete|boolean|false|none|none|
|canEdit|boolean|false|none|none|
|comments|string|false|none|none|
|commentsCount|integer(int32)|false|none|none|
|createDate|string|false|none|none|
|dataEntity|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» empty|boolean|false|none|none|
|files|[[ActivityFile](#schemaactivityfile)]|false|none|none|
|hasCommented|boolean|false|none|none|
|hasLiked|boolean|false|none|none|
|href|string|false|none|none|
|id|string|false|none|none|
|identity|string|false|none|none|
|lastUpdatedTime|integer(int64)|false|none|none|
|likes|string|false|none|none|
|likesCount|integer(int32)|false|none|none|
|link|string|false|none|none|
|mentions|[ActivityEntity](#schemaactivityentity)|false|none|none|
|metadatas|object|false|none|none|
|» **additionalProperties**|[[MetadataItemEntity](#schemametadataitementity)]|false|none|none|
|originalActivity|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» empty|boolean|false|none|none|
|owner|string|false|none|none|
|parentCommentId|string|false|none|none|
|poster|string|false|none|none|
|priority|string|false|none|none|
|read|string|false|none|none|
|shareActions|[[ActivityShareAction](#schemaactivityshareaction)]|false|none|none|
|sharedActions|[ActivityEntity](#schemaactivityentity)|false|none|none|
|targetSpaces|[string]|false|none|none|
|templateParams|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» empty|boolean|false|none|none|
|title|string|false|none|none|
|titleId|string|false|none|none|
|type|string|false|none|none|
|updateDate|string|false|none|none|

<h2 id="tocS_ContentTypeObject">ContentTypeObject</h2>
<!-- backwards compatibility -->
<a id="schemacontenttypeobject"></a>
<a id="schema_ContentTypeObject"></a>
<a id="tocScontenttypeobject"></a>
<a id="tocscontenttypeobject"></a>

```json
{
  "mimeType": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mimeType|string|false|none|none|

<h2 id="tocS_DataEntity">DataEntity</h2>
<!-- backwards compatibility -->
<a id="schemadataentity"></a>
<a id="schema_DataEntity"></a>
<a id="tocSdataentity"></a>
<a id="tocsdataentity"></a>

```json
{
  "empty": true,
  "property1": {},
  "property2": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|
|empty|boolean|false|none|none|

<h2 id="tocS_ExperienceEntity">ExperienceEntity</h2>
<!-- backwards compatibility -->
<a id="schemaexperienceentity"></a>
<a id="schema_ExperienceEntity"></a>
<a id="tocSexperienceentity"></a>
<a id="tocsexperienceentity"></a>

```json
{
  "company": "string",
  "description": "string",
  "endDate": "string",
  "id": "string",
  "isCurrent": true,
  "position": "string",
  "skills": "string",
  "startDate": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company|string|false|none|none|
|description|string|false|none|none|
|endDate|string|false|none|none|
|id|string|false|none|none|
|isCurrent|boolean|false|none|none|
|position|string|false|none|none|
|skills|string|false|none|none|
|startDate|string|false|none|none|

<h2 id="tocS_GlobalId">GlobalId</h2>
<!-- backwards compatibility -->
<a id="schemaglobalid"></a>
<a id="schema_GlobalId"></a>
<a id="tocSglobalid"></a>
<a id="tocsglobalid"></a>

```json
{
  "domain": "string",
  "localId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|none|
|localId|string|false|none|none|

<h2 id="tocS_IMEntity">IMEntity</h2>
<!-- backwards compatibility -->
<a id="schemaimentity"></a>
<a id="schema_IMEntity"></a>
<a id="tocSimentity"></a>
<a id="tocsimentity"></a>

```json
{
  "imId": "string",
  "imType": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imId|string|false|none|none|
|imType|string|false|none|none|

<h2 id="tocS_Identity">Identity</h2>
<!-- backwards compatibility -->
<a id="schemaidentity"></a>
<a id="schema_Identity"></a>
<a id="tocSidentity"></a>
<a id="tocsidentity"></a>

```json
{
  "cacheTime": 0,
  "deleted": true,
  "enable": true,
  "globalId": {
    "domain": "string",
    "localId": "string"
  },
  "id": "string",
  "profile": {
    "aboutMe": "string",
    "attachedActivityType": "USER",
    "avatarImageSource": "string",
    "avatarLastUpdated": 0,
    "avatarUrl": "string",
    "bannerLastUpdated": 0,
    "bannerUrl": "string",
    "city": "string",
    "company": "string",
    "country": "string",
    "createdTime": 0,
    "department": "string",
    "email": "string",
    "fullName": "string",
    "gender": "string",
    "hasChanged": true,
    "id": "string",
    "identity": {
      "cacheTime": 0,
      "deleted": true,
      "enable": true,
      "globalId": {
        "domain": "string",
        "localId": "string"
      },
      "id": "string",
      "profile": {},
      "profileLoader": {},
      "providerId": "string",
      "remoteId": "string",
      "space": true,
      "user": true
    },
    "lastLoaded": 0,
    "listUpdateTypes": [
      "POSITION"
    ],
    "location": "string",
    "phones": [
      {
        "property1": "string",
        "property2": "string"
      }
    ],
    "position": "string",
    "profession": "string",
    "properties": {
      "property1": {},
      "property2": {}
    },
    "synchronizedDate": "string",
    "team": "string",
    "timeZone": "string",
    "timeZoneDSTSavings": 0,
    "updateType": "POSITION",
    "url": "string"
  },
  "profileLoader": {},
  "providerId": "string",
  "remoteId": "string",
  "space": true,
  "user": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheTime|integer(int64)|false|none|none|
|deleted|boolean|false|none|none|
|enable|boolean|false|none|none|
|globalId|[GlobalId](#schemaglobalid)|false|none|none|
|id|string|false|none|none|
|profile|[Profile](#schemaprofile)|false|none|none|
|profileLoader|[ProfileLoader](#schemaprofileloader)|false|none|none|
|providerId|string|false|none|none|
|remoteId|string|false|none|none|
|space|boolean|false|none|none|
|user|boolean|false|none|none|

<h2 id="tocS_MembershipEntityWrapper">MembershipEntityWrapper</h2>
<!-- backwards compatibility -->
<a id="schemamembershipentitywrapper"></a>
<a id="schema_MembershipEntityWrapper"></a>
<a id="tocSmembershipentitywrapper"></a>
<a id="tocsmembershipentitywrapper"></a>

```json
{
  "group": "string",
  "membershipType": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|string|false|none|none|
|membershipType|string|false|none|none|

<h2 id="tocS_MetadataItemEntity">MetadataItemEntity</h2>
<!-- backwards compatibility -->
<a id="schemametadataitementity"></a>
<a id="schema_MetadataItemEntity"></a>
<a id="tocSmetadataitementity"></a>
<a id="tocsmetadataitementity"></a>

```json
{
  "audienceId": 0,
  "creatorId": 0,
  "id": 0,
  "name": "string",
  "objectId": "string",
  "objectType": "string",
  "parentObjectId": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audienceId|integer(int64)|false|none|none|
|creatorId|integer(int64)|false|none|none|
|id|integer(int64)|false|none|none|
|name|string|false|none|none|
|objectId|string|false|none|none|
|objectType|string|false|none|none|
|parentObjectId|string|false|none|none|
|properties|object|false|none|none|
|» **additionalProperties**|string|false|none|none|

<h2 id="tocS_PhoneEntity">PhoneEntity</h2>
<!-- backwards compatibility -->
<a id="schemaphoneentity"></a>
<a id="schema_PhoneEntity"></a>
<a id="tocSphoneentity"></a>
<a id="tocsphoneentity"></a>

```json
{
  "phoneNumber": "string",
  "phoneType": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phoneNumber|string|false|none|none|
|phoneType|string|false|none|none|

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
{
  "aboutMe": "string",
  "attachedActivityType": "USER",
  "avatarImageSource": "string",
  "avatarLastUpdated": 0,
  "avatarUrl": "string",
  "bannerLastUpdated": 0,
  "bannerUrl": "string",
  "city": "string",
  "company": "string",
  "country": "string",
  "createdTime": 0,
  "department": "string",
  "email": "string",
  "fullName": "string",
  "gender": "string",
  "hasChanged": true,
  "id": "string",
  "identity": {
    "cacheTime": 0,
    "deleted": true,
    "enable": true,
    "globalId": {
      "domain": "string",
      "localId": "string"
    },
    "id": "string",
    "profile": {
      "aboutMe": "string",
      "attachedActivityType": "USER",
      "avatarImageSource": "string",
      "avatarLastUpdated": 0,
      "avatarUrl": "string",
      "bannerLastUpdated": 0,
      "bannerUrl": "string",
      "city": "string",
      "company": "string",
      "country": "string",
      "createdTime": 0,
      "department": "string",
      "email": "string",
      "fullName": "string",
      "gender": "string",
      "hasChanged": true,
      "id": "string",
      "identity": {},
      "lastLoaded": 0,
      "listUpdateTypes": [
        "POSITION"
      ],
      "location": "string",
      "phones": [
        {
          "property1": "string",
          "property2": "string"
        }
      ],
      "position": "string",
      "profession": "string",
      "properties": {
        "property1": {},
        "property2": {}
      },
      "synchronizedDate": "string",
      "team": "string",
      "timeZone": "string",
      "timeZoneDSTSavings": 0,
      "updateType": "POSITION",
      "url": "string"
    },
    "profileLoader": {},
    "providerId": "string",
    "remoteId": "string",
    "space": true,
    "user": true
  },
  "lastLoaded": 0,
  "listUpdateTypes": [
    "POSITION"
  ],
  "location": "string",
  "phones": [
    {
      "property1": "string",
      "property2": "string"
    }
  ],
  "position": "string",
  "profession": "string",
  "properties": {
    "property1": {},
    "property2": {}
  },
  "synchronizedDate": "string",
  "team": "string",
  "timeZone": "string",
  "timeZoneDSTSavings": 0,
  "updateType": "POSITION",
  "url": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aboutMe|string|false|none|none|
|attachedActivityType|string|false|none|none|
|avatarImageSource|string|false|none|none|
|avatarLastUpdated|integer(int64)|false|none|none|
|avatarUrl|string|false|none|none|
|bannerLastUpdated|integer(int64)|false|none|none|
|bannerUrl|string|false|none|none|
|city|string|false|none|none|
|company|string|false|none|none|
|country|string|false|none|none|
|createdTime|integer(int64)|false|none|none|
|department|string|false|none|none|
|email|string|false|none|none|
|fullName|string|false|none|none|
|gender|string|false|none|none|
|hasChanged|boolean|false|write-only|none|
|id|string|false|none|none|
|identity|[Identity](#schemaidentity)|false|none|none|
|lastLoaded|integer(int64)|false|none|none|
|listUpdateTypes|[string]|false|none|none|
|location|string|false|none|none|
|phones|[object]|false|none|none|
|» **additionalProperties**|string|false|none|none|
|position|string|false|none|none|
|profession|string|false|none|none|
|properties|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|synchronizedDate|string|false|none|none|
|team|string|false|none|none|
|timeZone|string|false|none|none|
|timeZoneDSTSavings|integer(int32)|false|none|none|
|updateType|string|false|none|none|
|url|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|attachedActivityType|USER|
|attachedActivityType|SPACE|
|attachedActivityType|RELATION|
|attachedActivityType|RELATIONSHIP|
|updateType|POSITION|
|updateType|COMPANY|
|updateType|LOCATION|
|updateType|DEPARTMENT|
|updateType|TEAM|
|updateType|PROFESSION|
|updateType|COUNTRY|
|updateType|CITY|
|updateType|BASIC_INFOR|
|updateType|CONTACT|
|updateType|EXPERIENCES|
|updateType|AVATAR|
|updateType|ABOUT_ME|
|updateType|BANNER|
|updateType|TECHNICAL|

<h2 id="tocS_ProfileEntity">ProfileEntity</h2>
<!-- backwards compatibility -->
<a id="schemaprofileentity"></a>
<a id="schema_ProfileEntity"></a>
<a id="tocSprofileentity"></a>
<a id="tocsprofileentity"></a>

```json
{
  "aboutMe": "string",
  "avatar": "string",
  "banner": "string",
  "city": "string",
  "company": "string",
  "connectionsCount": "string",
  "connectionsInCommonCount": "string",
  "country": "string",
  "createdDate": "string",
  "dataEntity": {
    "empty": true,
    "property1": {},
    "property2": {}
  },
  "deleted": "string",
  "department": "string",
  "email": "string",
  "enabled": {
    "aboutMe": "string",
    "avatar": "string",
    "banner": "string",
    "city": "string",
    "company": "string",
    "connectionsCount": "string",
    "connectionsInCommonCount": "string",
    "country": "string",
    "createdDate": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "deleted": "string",
    "department": "string",
    "email": "string",
    "enabled": {},
    "enrollmentDate": "string",
    "experiences": [
      {
        "company": "string",
        "description": "string",
        "endDate": "string",
        "id": "string",
        "isCurrent": true,
        "position": "string",
        "skills": "string",
        "startDate": "string"
      }
    ],
    "firstname": "string",
    "fullname": "string",
    "gender": "string",
    "href": "string",
    "id": "string",
    "identity": "string",
    "ims": [
      {
        "imId": "string",
        "imType": "string"
      }
    ],
    "isExternal": {},
    "isGroupBound": true,
    "isInternal": true,
    "isInvited": true,
    "isManager": true,
    "isMember": true,
    "isPending": true,
    "isSpaceRedactor": true,
    "isSpacesManager": true,
    "lastLoginTime": "string",
    "lastUpdatedTime": 0,
    "lastname": "string",
    "location": "string",
    "notValid": true,
    "phones": [
      {
        "phoneNumber": "string",
        "phoneType": "string"
      }
    ],
    "position": "string",
    "profession": "string",
    "relationshipStatus": "string",
    "spacesCount": "string",
    "synchronizedDate": "string",
    "team": "string",
    "timeZone": "string",
    "timeZoneDSTSavings": "string",
    "urls": [
      {
        "url": "string"
      }
    ],
    "username": "string"
  },
  "enrollmentDate": "string",
  "experiences": [
    {
      "company": "string",
      "description": "string",
      "endDate": "string",
      "id": "string",
      "isCurrent": true,
      "position": "string",
      "skills": "string",
      "startDate": "string"
    }
  ],
  "firstname": "string",
  "fullname": "string",
  "gender": "string",
  "href": "string",
  "id": "string",
  "identity": "string",
  "ims": [
    {
      "imId": "string",
      "imType": "string"
    }
  ],
  "isExternal": {
    "aboutMe": "string",
    "avatar": "string",
    "banner": "string",
    "city": "string",
    "company": "string",
    "connectionsCount": "string",
    "connectionsInCommonCount": "string",
    "country": "string",
    "createdDate": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "deleted": "string",
    "department": "string",
    "email": "string",
    "enabled": {},
    "enrollmentDate": "string",
    "experiences": [
      {
        "company": "string",
        "description": "string",
        "endDate": "string",
        "id": "string",
        "isCurrent": true,
        "position": "string",
        "skills": "string",
        "startDate": "string"
      }
    ],
    "firstname": "string",
    "fullname": "string",
    "gender": "string",
    "href": "string",
    "id": "string",
    "identity": "string",
    "ims": [
      {
        "imId": "string",
        "imType": "string"
      }
    ],
    "isExternal": {},
    "isGroupBound": true,
    "isInternal": true,
    "isInvited": true,
    "isManager": true,
    "isMember": true,
    "isPending": true,
    "isSpaceRedactor": true,
    "isSpacesManager": true,
    "lastLoginTime": "string",
    "lastUpdatedTime": 0,
    "lastname": "string",
    "location": "string",
    "notValid": true,
    "phones": [
      {
        "phoneNumber": "string",
        "phoneType": "string"
      }
    ],
    "position": "string",
    "profession": "string",
    "relationshipStatus": "string",
    "spacesCount": "string",
    "synchronizedDate": "string",
    "team": "string",
    "timeZone": "string",
    "timeZoneDSTSavings": "string",
    "urls": [
      {
        "url": "string"
      }
    ],
    "username": "string"
  },
  "isGroupBound": true,
  "isInternal": true,
  "isInvited": true,
  "isManager": true,
  "isMember": true,
  "isPending": true,
  "isSpaceRedactor": true,
  "isSpacesManager": true,
  "lastLoginTime": "string",
  "lastUpdatedTime": 0,
  "lastname": "string",
  "location": "string",
  "notValid": true,
  "phones": [
    {
      "phoneNumber": "string",
      "phoneType": "string"
    }
  ],
  "position": "string",
  "profession": "string",
  "relationshipStatus": "string",
  "spacesCount": "string",
  "synchronizedDate": "string",
  "team": "string",
  "timeZone": "string",
  "timeZoneDSTSavings": "string",
  "urls": [
    {
      "url": "string"
    }
  ],
  "username": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aboutMe|string|false|none|none|
|avatar|string|false|none|none|
|banner|string|false|none|none|
|city|string|false|none|none|
|company|string|false|none|none|
|connectionsCount|string|false|none|none|
|connectionsInCommonCount|string|false|none|none|
|country|string|false|none|none|
|createdDate|string|false|none|none|
|dataEntity|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» empty|boolean|false|none|none|
|deleted|string|false|none|none|
|department|string|false|none|none|
|email|string|false|none|none|
|enabled|[ProfileEntity](#schemaprofileentity)|false|none|none|
|enrollmentDate|string|false|none|none|
|experiences|[[ExperienceEntity](#schemaexperienceentity)]|false|none|none|
|firstname|string|false|none|none|
|fullname|string|false|none|none|
|gender|string|false|none|none|
|href|string|false|none|none|
|id|string|false|none|none|
|identity|string|false|none|none|
|ims|[[IMEntity](#schemaimentity)]|false|none|none|
|isExternal|[ProfileEntity](#schemaprofileentity)|false|none|none|
|isGroupBound|boolean|false|none|none|
|isInternal|boolean|false|none|none|
|isInvited|boolean|false|none|none|
|isManager|boolean|false|none|none|
|isMember|boolean|false|none|none|
|isPending|boolean|false|none|none|
|isSpaceRedactor|boolean|false|none|none|
|isSpacesManager|boolean|false|none|none|
|lastLoginTime|string|false|none|none|
|lastUpdatedTime|integer(int64)|false|none|none|
|lastname|string|false|none|none|
|location|string|false|none|none|
|notValid|boolean|false|none|none|
|phones|[[PhoneEntity](#schemaphoneentity)]|false|none|none|
|position|string|false|none|none|
|profession|string|false|none|none|
|relationshipStatus|string|false|none|none|
|spacesCount|string|false|none|none|
|synchronizedDate|string|false|none|none|
|team|string|false|none|none|
|timeZone|string|false|none|none|
|timeZoneDSTSavings|string|false|none|none|
|urls|[[URLEntity](#schemaurlentity)]|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_ProfileLoader">ProfileLoader</h2>
<!-- backwards compatibility -->
<a id="schemaprofileloader"></a>
<a id="schema_ProfileLoader"></a>
<a id="tocSprofileloader"></a>
<a id="tocsprofileloader"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_RelationshipEntity">RelationshipEntity</h2>
<!-- backwards compatibility -->
<a id="schemarelationshipentity"></a>
<a id="schema_RelationshipEntity"></a>
<a id="tocSrelationshipentity"></a>
<a id="tocsrelationshipentity"></a>

```json
{
  "dataEntity": {
    "empty": true,
    "property1": {},
    "property2": {}
  },
  "dataReceiver": {
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "dataReceiver": {},
    "dataSender": {},
    "href": "string",
    "id": "string",
    "lastUpdatedTime": 0,
    "receiver": "string",
    "sender": "string",
    "status": "string",
    "symetric": {}
  },
  "dataSender": {
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "dataReceiver": {},
    "dataSender": {},
    "href": "string",
    "id": "string",
    "lastUpdatedTime": 0,
    "receiver": "string",
    "sender": "string",
    "status": "string",
    "symetric": {}
  },
  "href": "string",
  "id": "string",
  "lastUpdatedTime": 0,
  "receiver": "string",
  "sender": "string",
  "status": "string",
  "symetric": {
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "dataReceiver": {},
    "dataSender": {},
    "href": "string",
    "id": "string",
    "lastUpdatedTime": 0,
    "receiver": "string",
    "sender": "string",
    "status": "string",
    "symetric": {}
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataEntity|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» empty|boolean|false|none|none|
|dataReceiver|[RelationshipEntity](#schemarelationshipentity)|false|none|none|
|dataSender|[RelationshipEntity](#schemarelationshipentity)|false|none|none|
|href|string|false|none|none|
|id|string|false|none|none|
|lastUpdatedTime|integer(int64)|false|none|none|
|receiver|string|false|none|none|
|sender|string|false|none|none|
|status|string|false|none|none|
|symetric|[RelationshipEntity](#schemarelationshipentity)|false|none|none|

<h2 id="tocS_SpaceEntity">SpaceEntity</h2>
<!-- backwards compatibility -->
<a id="schemaspaceentity"></a>
<a id="schema_SpaceEntity"></a>
<a id="tocSspaceentity"></a>
<a id="tocsspaceentity"></a>

```json
{
  "applications": {
    "applications": {},
    "avatarId": "string",
    "avatarUrl": "string",
    "bannerId": "string",
    "bannerUrl": "string",
    "canEdit": true,
    "createdTime": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "description": "string",
    "displayName": "string",
    "externalInvitedUsers": [
      "string"
    ],
    "groupId": "string",
    "hasBindings": {},
    "href": "string",
    "id": "string",
    "identity": {},
    "invitedMembers": [
      {
        "cacheTime": 0,
        "deleted": true,
        "enable": true,
        "globalId": {
          "domain": "string",
          "localId": "string"
        },
        "id": "string",
        "profile": {
          "aboutMe": "string",
          "attachedActivityType": "USER",
          "avatarImageSource": "string",
          "avatarLastUpdated": 0,
          "avatarUrl": "string",
          "bannerLastUpdated": 0,
          "bannerUrl": "string",
          "city": "string",
          "company": "string",
          "country": "string",
          "createdTime": 0,
          "department": "string",
          "email": "string",
          "fullName": "string",
          "gender": "string",
          "hasChanged": true,
          "id": "string",
          "identity": {},
          "lastLoaded": 0,
          "listUpdateTypes": [
            "POSITION"
          ],
          "location": "string",
          "phones": [
            {
              "property1": "string",
              "property2": "string"
            }
          ],
          "position": "string",
          "profession": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "synchronizedDate": "string",
          "team": "string",
          "timeZone": "string",
          "timeZoneDSTSavings": 0,
          "updateType": "POSITION",
          "url": "string"
        },
        "profileLoader": {},
        "providerId": "string",
        "remoteId": "string",
        "space": true,
        "user": true
      }
    ],
    "isFavorite": "string",
    "isInvited": true,
    "isManager": true,
    "isMember": true,
    "isPending": true,
    "isRedactor": true,
    "isUserBound": true,
    "lastUpdatedTime": 0,
    "managers": "string",
    "managersCount": 0,
    "members": "string",
    "membersCount": 0,
    "pending": "string",
    "prettyName": "string",
    "redactors": "string",
    "redactorsCount": 0,
    "subscription": "string",
    "template": "string",
    "totalBoundUsers": 0,
    "url": "string",
    "visibility": "string"
  },
  "avatarId": "string",
  "avatarUrl": "string",
  "bannerId": "string",
  "bannerUrl": "string",
  "canEdit": true,
  "createdTime": "string",
  "dataEntity": {
    "empty": true,
    "property1": {},
    "property2": {}
  },
  "description": "string",
  "displayName": "string",
  "externalInvitedUsers": [
    "string"
  ],
  "groupId": "string",
  "hasBindings": {
    "applications": {},
    "avatarId": "string",
    "avatarUrl": "string",
    "bannerId": "string",
    "bannerUrl": "string",
    "canEdit": true,
    "createdTime": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "description": "string",
    "displayName": "string",
    "externalInvitedUsers": [
      "string"
    ],
    "groupId": "string",
    "hasBindings": {},
    "href": "string",
    "id": "string",
    "identity": {},
    "invitedMembers": [
      {
        "cacheTime": 0,
        "deleted": true,
        "enable": true,
        "globalId": {
          "domain": "string",
          "localId": "string"
        },
        "id": "string",
        "profile": {
          "aboutMe": "string",
          "attachedActivityType": "USER",
          "avatarImageSource": "string",
          "avatarLastUpdated": 0,
          "avatarUrl": "string",
          "bannerLastUpdated": 0,
          "bannerUrl": "string",
          "city": "string",
          "company": "string",
          "country": "string",
          "createdTime": 0,
          "department": "string",
          "email": "string",
          "fullName": "string",
          "gender": "string",
          "hasChanged": true,
          "id": "string",
          "identity": {},
          "lastLoaded": 0,
          "listUpdateTypes": [
            "POSITION"
          ],
          "location": "string",
          "phones": [
            {
              "property1": "string",
              "property2": "string"
            }
          ],
          "position": "string",
          "profession": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "synchronizedDate": "string",
          "team": "string",
          "timeZone": "string",
          "timeZoneDSTSavings": 0,
          "updateType": "POSITION",
          "url": "string"
        },
        "profileLoader": {},
        "providerId": "string",
        "remoteId": "string",
        "space": true,
        "user": true
      }
    ],
    "isFavorite": "string",
    "isInvited": true,
    "isManager": true,
    "isMember": true,
    "isPending": true,
    "isRedactor": true,
    "isUserBound": true,
    "lastUpdatedTime": 0,
    "managers": "string",
    "managersCount": 0,
    "members": "string",
    "membersCount": 0,
    "pending": "string",
    "prettyName": "string",
    "redactors": "string",
    "redactorsCount": 0,
    "subscription": "string",
    "template": "string",
    "totalBoundUsers": 0,
    "url": "string",
    "visibility": "string"
  },
  "href": "string",
  "id": "string",
  "identity": {
    "applications": {},
    "avatarId": "string",
    "avatarUrl": "string",
    "bannerId": "string",
    "bannerUrl": "string",
    "canEdit": true,
    "createdTime": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "description": "string",
    "displayName": "string",
    "externalInvitedUsers": [
      "string"
    ],
    "groupId": "string",
    "hasBindings": {},
    "href": "string",
    "id": "string",
    "identity": {},
    "invitedMembers": [
      {
        "cacheTime": 0,
        "deleted": true,
        "enable": true,
        "globalId": {
          "domain": "string",
          "localId": "string"
        },
        "id": "string",
        "profile": {
          "aboutMe": "string",
          "attachedActivityType": "USER",
          "avatarImageSource": "string",
          "avatarLastUpdated": 0,
          "avatarUrl": "string",
          "bannerLastUpdated": 0,
          "bannerUrl": "string",
          "city": "string",
          "company": "string",
          "country": "string",
          "createdTime": 0,
          "department": "string",
          "email": "string",
          "fullName": "string",
          "gender": "string",
          "hasChanged": true,
          "id": "string",
          "identity": {},
          "lastLoaded": 0,
          "listUpdateTypes": [
            "POSITION"
          ],
          "location": "string",
          "phones": [
            {
              "property1": "string",
              "property2": "string"
            }
          ],
          "position": "string",
          "profession": "string",
          "properties": {
            "property1": {},
            "property2": {}
          },
          "synchronizedDate": "string",
          "team": "string",
          "timeZone": "string",
          "timeZoneDSTSavings": 0,
          "updateType": "POSITION",
          "url": "string"
        },
        "profileLoader": {},
        "providerId": "string",
        "remoteId": "string",
        "space": true,
        "user": true
      }
    ],
    "isFavorite": "string",
    "isInvited": true,
    "isManager": true,
    "isMember": true,
    "isPending": true,
    "isRedactor": true,
    "isUserBound": true,
    "lastUpdatedTime": 0,
    "managers": "string",
    "managersCount": 0,
    "members": "string",
    "membersCount": 0,
    "pending": "string",
    "prettyName": "string",
    "redactors": "string",
    "redactorsCount": 0,
    "subscription": "string",
    "template": "string",
    "totalBoundUsers": 0,
    "url": "string",
    "visibility": "string"
  },
  "invitedMembers": [
    {
      "cacheTime": 0,
      "deleted": true,
      "enable": true,
      "globalId": {
        "domain": "string",
        "localId": "string"
      },
      "id": "string",
      "profile": {
        "aboutMe": "string",
        "attachedActivityType": "USER",
        "avatarImageSource": "string",
        "avatarLastUpdated": 0,
        "avatarUrl": "string",
        "bannerLastUpdated": 0,
        "bannerUrl": "string",
        "city": "string",
        "company": "string",
        "country": "string",
        "createdTime": 0,
        "department": "string",
        "email": "string",
        "fullName": "string",
        "gender": "string",
        "hasChanged": true,
        "id": "string",
        "identity": {},
        "lastLoaded": 0,
        "listUpdateTypes": [
          "POSITION"
        ],
        "location": "string",
        "phones": [
          {
            "property1": "string",
            "property2": "string"
          }
        ],
        "position": "string",
        "profession": "string",
        "properties": {
          "property1": {},
          "property2": {}
        },
        "synchronizedDate": "string",
        "team": "string",
        "timeZone": "string",
        "timeZoneDSTSavings": 0,
        "updateType": "POSITION",
        "url": "string"
      },
      "profileLoader": {},
      "providerId": "string",
      "remoteId": "string",
      "space": true,
      "user": true
    }
  ],
  "isFavorite": "string",
  "isInvited": true,
  "isManager": true,
  "isMember": true,
  "isPending": true,
  "isRedactor": true,
  "isUserBound": true,
  "lastUpdatedTime": 0,
  "managers": "string",
  "managersCount": 0,
  "members": "string",
  "membersCount": 0,
  "pending": "string",
  "prettyName": "string",
  "redactors": "string",
  "redactorsCount": 0,
  "subscription": "string",
  "template": "string",
  "totalBoundUsers": 0,
  "url": "string",
  "visibility": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applications|[SpaceEntity](#schemaspaceentity)|false|none|none|
|avatarId|string|false|none|none|
|avatarUrl|string|false|none|none|
|bannerId|string|false|none|none|
|bannerUrl|string|false|none|none|
|canEdit|boolean|false|none|none|
|createdTime|string|false|none|none|
|dataEntity|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» empty|boolean|false|none|none|
|description|string|false|none|none|
|displayName|string|false|none|none|
|externalInvitedUsers|[string]|false|none|none|
|groupId|string|false|none|none|
|hasBindings|[SpaceEntity](#schemaspaceentity)|false|none|none|
|href|string|false|none|none|
|id|string|false|none|none|
|identity|[SpaceEntity](#schemaspaceentity)|false|none|none|
|invitedMembers|[[Identity](#schemaidentity)]|false|none|none|
|isFavorite|string|false|none|none|
|isInvited|boolean|false|none|none|
|isManager|boolean|false|none|none|
|isMember|boolean|false|none|none|
|isPending|boolean|false|none|none|
|isRedactor|boolean|false|none|none|
|isUserBound|boolean|false|none|none|
|lastUpdatedTime|integer(int64)|false|none|none|
|managers|string|false|none|none|
|managersCount|integer(int32)|false|none|none|
|members|string|false|none|none|
|membersCount|integer(int32)|false|none|none|
|pending|string|false|none|none|
|prettyName|string|false|none|none|
|redactors|string|false|none|none|
|redactorsCount|integer(int32)|false|none|none|
|subscription|string|false|none|none|
|template|string|false|none|none|
|totalBoundUsers|integer(int64)|false|none|none|
|url|string|false|none|none|
|visibility|string|false|none|none|

<h2 id="tocS_SpaceMembershipEntity">SpaceMembershipEntity</h2>
<!-- backwards compatibility -->
<a id="schemaspacemembershipentity"></a>
<a id="schema_SpaceMembershipEntity"></a>
<a id="tocSspacemembershipentity"></a>
<a id="tocsspacemembershipentity"></a>

```json
{
  "dataEntity": {
    "empty": true,
    "property1": {},
    "property2": {}
  },
  "dataSpace": {
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "dataSpace": {},
    "dataUser": {},
    "href": "string",
    "id": "string",
    "lastUpdatedTime": 0,
    "role": "string",
    "space": "string",
    "status": "string",
    "user": "string"
  },
  "dataUser": {
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "dataSpace": {},
    "dataUser": {},
    "href": "string",
    "id": "string",
    "lastUpdatedTime": 0,
    "role": "string",
    "space": "string",
    "status": "string",
    "user": "string"
  },
  "href": "string",
  "id": "string",
  "lastUpdatedTime": 0,
  "role": "string",
  "space": "string",
  "status": "string",
  "user": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataEntity|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» empty|boolean|false|none|none|
|dataSpace|[SpaceMembershipEntity](#schemaspacemembershipentity)|false|none|none|
|dataUser|[SpaceMembershipEntity](#schemaspacemembershipentity)|false|none|none|
|href|string|false|none|none|
|id|string|false|none|none|
|lastUpdatedTime|integer(int64)|false|none|none|
|role|string|false|none|none|
|space|string|false|none|none|
|status|string|false|none|none|
|user|string|false|none|none|

<h2 id="tocS_URLEntity">URLEntity</h2>
<!-- backwards compatibility -->
<a id="schemaurlentity"></a>
<a id="schema_URLEntity"></a>
<a id="tocSurlentity"></a>
<a id="tocsurlentity"></a>

```json
{
  "url": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|none|

<h2 id="tocS_UserEntity">UserEntity</h2>
<!-- backwards compatibility -->
<a id="schemauserentity"></a>
<a id="schema_UserEntity"></a>
<a id="tocSuserentity"></a>
<a id="tocsuserentity"></a>

```json
{
  "avatar": "string",
  "city": "string",
  "company": "string",
  "country": "string",
  "dataEntity": {
    "empty": true,
    "property1": {},
    "property2": {}
  },
  "deleted": "string",
  "department": {
    "avatar": "string",
    "city": "string",
    "company": "string",
    "country": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "deleted": "string",
    "department": {},
    "email": "string",
    "experiences": {},
    "firstname": "string",
    "fullname": "string",
    "gender": "string",
    "href": "string",
    "id": "string",
    "identity": "string",
    "ims": {},
    "lastUpdatedTime": 0,
    "lastname": "string",
    "location": "string",
    "notValid": true,
    "password": "string",
    "phones": {},
    "position": "string",
    "profession": "string",
    "team": "string",
    "urls": {},
    "username": "string"
  },
  "email": "string",
  "experiences": {
    "avatar": "string",
    "city": "string",
    "company": "string",
    "country": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "deleted": "string",
    "department": {},
    "email": "string",
    "experiences": {},
    "firstname": "string",
    "fullname": "string",
    "gender": "string",
    "href": "string",
    "id": "string",
    "identity": "string",
    "ims": {},
    "lastUpdatedTime": 0,
    "lastname": "string",
    "location": "string",
    "notValid": true,
    "password": "string",
    "phones": {},
    "position": "string",
    "profession": "string",
    "team": "string",
    "urls": {},
    "username": "string"
  },
  "firstname": "string",
  "fullname": "string",
  "gender": "string",
  "href": "string",
  "id": "string",
  "identity": "string",
  "ims": {
    "avatar": "string",
    "city": "string",
    "company": "string",
    "country": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "deleted": "string",
    "department": {},
    "email": "string",
    "experiences": {},
    "firstname": "string",
    "fullname": "string",
    "gender": "string",
    "href": "string",
    "id": "string",
    "identity": "string",
    "ims": {},
    "lastUpdatedTime": 0,
    "lastname": "string",
    "location": "string",
    "notValid": true,
    "password": "string",
    "phones": {},
    "position": "string",
    "profession": "string",
    "team": "string",
    "urls": {},
    "username": "string"
  },
  "lastUpdatedTime": 0,
  "lastname": "string",
  "location": "string",
  "notValid": true,
  "password": "string",
  "phones": {
    "avatar": "string",
    "city": "string",
    "company": "string",
    "country": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "deleted": "string",
    "department": {},
    "email": "string",
    "experiences": {},
    "firstname": "string",
    "fullname": "string",
    "gender": "string",
    "href": "string",
    "id": "string",
    "identity": "string",
    "ims": {},
    "lastUpdatedTime": 0,
    "lastname": "string",
    "location": "string",
    "notValid": true,
    "password": "string",
    "phones": {},
    "position": "string",
    "profession": "string",
    "team": "string",
    "urls": {},
    "username": "string"
  },
  "position": "string",
  "profession": "string",
  "team": "string",
  "urls": {
    "avatar": "string",
    "city": "string",
    "company": "string",
    "country": "string",
    "dataEntity": {
      "empty": true,
      "property1": {},
      "property2": {}
    },
    "deleted": "string",
    "department": {},
    "email": "string",
    "experiences": {},
    "firstname": "string",
    "fullname": "string",
    "gender": "string",
    "href": "string",
    "id": "string",
    "identity": "string",
    "ims": {},
    "lastUpdatedTime": 0,
    "lastname": "string",
    "location": "string",
    "notValid": true,
    "password": "string",
    "phones": {},
    "position": "string",
    "profession": "string",
    "team": "string",
    "urls": {},
    "username": "string"
  },
  "username": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatar|string|false|none|none|
|city|string|false|none|none|
|company|string|false|none|none|
|country|string|false|none|none|
|dataEntity|object|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» empty|boolean|false|none|none|
|deleted|string|false|none|none|
|department|[UserEntity](#schemauserentity)|false|none|none|
|email|string|false|none|none|
|experiences|[UserEntity](#schemauserentity)|false|none|none|
|firstname|string|false|none|none|
|fullname|string|false|none|none|
|gender|string|false|none|none|
|href|string|false|none|none|
|id|string|false|none|none|
|identity|string|false|none|none|
|ims|[UserEntity](#schemauserentity)|false|none|none|
|lastUpdatedTime|integer(int64)|false|none|none|
|lastname|string|false|none|none|
|location|string|false|none|none|
|notValid|boolean|false|none|none|
|password|string|false|none|none|
|phones|[UserEntity](#schemauserentity)|false|none|none|
|position|string|false|none|none|
|profession|string|false|none|none|
|team|string|false|none|none|
|urls|[UserEntity](#schemauserentity)|false|none|none|
|username|string|false|none|none|

