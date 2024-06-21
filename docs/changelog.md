# `node-mdaemon-api` Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

> **NOTE**: APIs marked *NEW* do not exist in MDaemon's native SDK, but
> are made available to the Node.js developer for ease of development
> and completeness.

## 24.0.0-alpha.33 - unreleased

### Added

- implemented `MD_CalDeleteAllAttachments`
- implemented `MD_CalDeleteAllAttendees`

## 24.0.0-alpha.32 - unreleased

### Added

- export `MD_GroupGetADGroup`
- export `MD_GroupUpdate`
- export `MD_GroupWrite`
- declare `MD_TemplateWrite`
- declare `MD_TemplateCreate`

### Fixed

- fix `MD_GetAccessType` exported to Node.js with double quotes

## 24.0.0-alpha.31 - 2024-06-20

### Added

- implemented `MD_ContactGetDomainAllowedSendersFolder`
- implemented `MD_ContactPubAllowedSendersCheck`
- implemented `MD_RenameUserFolder`
- implemented `MD_TemplateCreate`
- implemented `MD_TemplateWrite`

### Fixed

- fix #2 "`MD_GroupGetMembers([GroupName], )` is not string" error

### Changed

- built with MDaemon 24.0.0 headers
- documentation moved from wiki to `/docs`

## 23.5.3-alpha.30 - 2024-05-17

### Added

- define interface `MD_CalItem`
- implemented `MD_CalGetCalItem`
- implemented `MD_CalInitCalItem2`
- implemented `MD_CalInitCalItem`

### Fixed

- fix `readUserRoles` requires two parameters, not one

### Changed

- built with [Node v20.13.1 (LTS)](https://nodejs.org/en/blog/release/v20.13.1) headers
- extend `MdGatewayFlags` from `MdFlags`

## 23.5.3-alpha.29 - 2024-04-10

### Added

- implement `MD_ContactDeleteAllItems`
- implement `MD_ContactGetAllItems`
- implement `MD_ContactInitItem`
- implement `MD_TaskDeleteAllItems`
- implement `MD_TaskDeleteTaskItem`
- implement `MD_TaskGetAllItems`
- implement `MD_TaskGetTaskItem`
- implement `MD_TaskInitTaskItem`
- add exports for `readUserRoles` and `readUserRolesSync` in `index.d.ts`

### Changed

- built with [Node v20.12.1 (LTS)](https://nodejs.org/en/blog/release/v20.12.1) headers
- add interface `MdFlags`
- extend `MdMultiPOPItemFlags` from `MdFlags`
- `MD_TaskItem.Flags` was a `number` and now is an object `MdTaskItemFlags`
- `MD_ContactItem.Flags` was a `number` and now is an object `MdContactItemFlags`

## 23.5.3-alpha.28 - 2024-04-04

### Added

- implement `MD_AddUser` (experimental)
- implement `MD_AddMultiPOPItem`
- implement `MD_DeleteMultiPOPItem`
- implement `MD_GetEnableMultiPOP`
- implement `MD_GetMultiPOPItems`
- implement `MD_GetMultiPOPMaxMessageAge`
- implement `MD_GetMultiPOPMaxMessageSize`
- implement `MD_InitMultiPOPItem`
- implement `MD_SetEnableMultiPOP`
- implement `MD_SetMultiPOPItems`
- implement `MD_SetMultiPOPMaxMessageAge`
- implement `MD_SetMultiPOPMaxMessageSize`

### Changed

- built with [Node.js 20.12.0](https://nodejs.org/en/blog/release/v20.12.0) headers

## 23.5.3-alpha.27 - 2024-03-26

### Added

- implement `sem.alert`
- implement `sem.clearQuotaCounts`
- implement `sem.delUser`

### Changed

- built with Node.js 20.11.1 headers
- built with MDaemon 23.5.3 headers

## 23.5.2-alpha.26 - 2024-03-02

### Added

- implement `MD_NoteGetAllItems`
- implement `MD_NoteItemCompare`
- implement `MD_NoteWriteNoteItem`
- implement `MD_VerifyGatewayInfo`
- implement `MD_WriteGateway`
- implement `gatewayExistsSync`
- interface `MdGatewayFlags`
- interface `MdApiResultBase`
- interface `MdApiResult<TData>`

### Fixed

- memory leak in `MD_NoteItemCompare`
- missing `MD_NoteItemCompare` TypeScript declaration
- memory leak in `MD_InitGatewayInfo`

### Changed

- `MD_Gateway.Flags` changed from `number` to `MdGatewayFlags`; old numeric value is now found in `MD_Gateway.Flags.raw`
- built with [Node.js 20.11.1](https://nodejs.org/en/blog/release/v20.11.1) headers
- interface `MdCalResult<T>` is `MdApiResult<TData>` alias
- interface `MdCalResultSimple` is `MdApiResultBase` alias
- function `MD_NoteDeleteAllItems` returns `MdApiResultBase`
- function `MD_NoteWriteNoteItem` returns `MdApiResultBase`
- function `MD_NoteGetNoteItem` returns `MdApiResult<MD_NoteItem>`

## 23.5.2-alpha.25 - 2024-02-12

### Added

- implement `MD_NoteInitNoteItem`

### Fixed

- complete `MD_NoteGetNoteItem`

## 23.5.1-alpha.24 - 2024-01-25

### Added

- implement `MD_NoteDeleteAllItems`
- implement `MD_TaskGetIDFromiCalUid`

### Changed

- built with Node.js 20.11.0 headers

## 23.5.1-alpha.23 - 2023-12-29

### Fixed

- fix `MD_AppPasswordGetAll`
- fix some memory leaks in application password code

### Changed

- `MD_ListWriteMember` simplified
- built with MDaemon 23.5.1 headers
  
## 23.5.1-alpha.22 - 2023-12-06

This is an intermediate version whose sole purpose is to make the module compatible with the 23.5.x series of MDaemon and the 20.x series of Node.js.

### Added

- implement `MD_GetEnableAIMessageFeatures`
- implement `MD_SetEnableAIMessageFeatures`
- implement `MD_TemplateCopy`

### Changed

- add new field `MD_UserInfo.EnableAIMessageFeatures`
- `readMailingListMembersSync` has optional 2nd parameter `includeQueries`
- `readMailingListMembers` has optional 3rd parameter `includeQueries`
- `MD_ListMember` interface has optional property `Flags`
- built with MDaemon 23.5.0 headers
- built with Node.js 20.10.0 headers
- compatible with Node.js 20

## 23.0.0-alpha.21 - 2023-03-22

### Added

- implement `domainExists` (**NEW**)
- implement `readMailingListMembers` (**NEW**)
- implement `readUserRolesSync` (**NEW**)
- implement `readUserRoles` (**NEW**)

### Changed

- built with Node.js 18.15.0 headers

## 23.0.0-alpha.20 - 2023-02-18

> **BREAKING CHANGES**
>
> Most document-related APIs changed signature due to impossibility to
> project MDaemon's document handlers to Node.js. From now on, from
> Node.js, a user's document is identified by a pair: (*path*, *id*).
> You get the IDs of documents present in a user's directory using the
> API `MD_DocumentGetMultipleItems`.
>
> Affected APIs
>
> - `MD_DocumentFreeItem` (removed because no longer necessary)
> - `MD_DocumentGetId` (removed because no longer necessary)
> - `MD_DocumentGetItem` (removed and replaced by `readDocumentInfo` and `readDocumentInfoSync`, which have similar functionality)
> - `MD_DocumentGetFileName`
> - `MD_DocumentGetFileSize`
> - `MD_DocumentGetModifiedBy`
> - `MD_DocumentGetModifiedTime`

### Added

- implement `MD_ContactGetBlackListFolder`
- implement `MD_ContactGetPublicFolder`
- implement `MD_ContactGetWhiteListFolder`
- implement `MD_DocumentGetMultipleItems`
- implement `MD_GetRemoteQueues`
- implement `MD_InitUserInfoByTemplate`
- implement `MD_IsAlreadyAQueue`
- implement `domainExistsSync` (**NEW**)
- implement `readDocumentInfoSync` (**NEW**)
- implement `readDocumentInfo` (**NEW**)
- implement `readMailingListMembersSync` (**NEW**)

### Removed

- remove `MD_DocumentFreeItem`
- remove `MD_DocumentGetId`
- remove `MD_DocumentGetItem`

### Changed

- built with MDaemon 23.0.0 headers
- built with Node.js 18.14.1 headers
- works with Node.js LTS 18.x.y
- change signature `MD_DocumentGetFileName`
- change signature `MD_DocumentGetFileSize`
- change signature `MD_DocumentGetModifiedBy`
- change signature `MD_DocumentGetModifiedTime`

### Fixed

- SYSTEMTIME to ES Date conversion fixed

## 22.0.3-alpha.19 - 2022-11-26

### Added

- implement MD_SetUserInfo

### Changed

- build with MDaemon 22.0.3 headers
- build with Node.js 18.12.1 headers
  
## 22.0.2-alpha.18 - 2022-08-23

### Added

- define MD_AppPassword
- implement MD_AppPasswordCreate
- implement MD_AppPasswordDelete
- implement MD_AppPasswordDeleteAll
- implement MD_AppPasswordGetAll
- implement MD_AppPasswordGetByID
- implement MD_AppPasswordRename
- implement MD_AppPasswordValidate
- implement MD_GetDomainIP
- implement MD_GetDomainIP6
- implement MD_GetMyIPAddresses

### Changed

- build with MDaemon 22.0.2 headers
- build with Node.js 16.17.0 headers
- minor optimization in MD_AppPasswordGetCount
- minor optimization in MD_GetAppDir

### Fixed

- fix MD_InvalidateAliases
  
## 22.0.2-alpha.17 - 2022-08-19

### Added

- implement MD_AttachmentLinkingDelete
- implement MD_DeleteMessageFile
- implement MD_IsDynamicPasswordStr
- implement MD_IsSecurePasswordStr
- implement MD_IsSystemAddress
- implement MD_ListReplaceMember
- implement MD_PostAppMessage
- implement MD_SendAppMessage
- implement MD_SetGhostCount
- implement MD_SetNotificationFlag
- implement MD_StripSubAddressedPath

### Changed

- small optimisation in MD_CreateAlias
- small optimisation in MD_DeleteAlias
- small optimisation in MD_DeleteAllAliases
- small optimisation in MD_InvalidateAliases
- small optimisation in MD_IsValidAlias
- small optimisation in MD_TranslateAlias

## 22.0.0-alpha.16 - 2022-07-01

### Added

- implement MD_GetSharedListMemberInfo
- implement MD_ListGetNamesByMember
- implement MD_ListIsDBReady
- implement MD_ListNotificationAddress
- implement MD_ListPassword
- implement MD_ListSetDigest
- implement MD_ListSetNomail
- implement MD_ListSetNormal
- implement MD_ListSetReadOnly
- implement MD_ListSetRealName
- implement MD_ListSubscribeNote
- implement MD_ListSuppressed
- implement MD_ListUnsubscribeNote
- implement MD_ListWriteMember
- implement MD_VerifyListInfo
- implement MD_WriteList
- implement readMailingList (**NEW**)
- implement readMailingListSync (**NEW**)

## 22.0.0-alpha.15 - 2022-06-18

### Added

- implement MD_GetListBoolKey
- implement MD_GetListLongKey
- implement MD_GetListStringKey
- implement MD_GroupCopy
- implement MD_ListDigestMBF
- implement MD_ListModerated
- implement MD_ListUpdateDomain

## 21.5.2-alpha.14 - 2022-05-14

### Added

- implement MD_ListGetReminderPath
- implement MD_ListInsertCaption
- implement MD_ListIsMember
- implement MD_ListMemberCount
- implement MD_ListPrecedenceLevel
- implement MD_ListRemoveFromAll
- implement MD_ListRemoveMember

## 21.5.2-alpha.13 - 2022-05-07

### Added

- fix enums in TypeScript file
- implement MD_ListAddMember
- implement MD_ListAllowSubscribe
- implement MD_ListArchiveCatalog
- implement MD_ListDefaultMode
- implement MD_ListEnabled
- implement MD_ListGetPathName

### Changed

- move changelog from package to wiki

## 21.5.2-alpha.12 - 2022-04-30

### Added

- implement MD_GetAccessType (**NEW**)
- implement MD_GetAllowIMAPAccess
- implement MD_GetEditIMAPRules
- implement MD_GetExtractInbound
- implement MD_GetExtractOutbound
- implement MD_GetQuotaCounts
- implement MD_GetRequireAppPassword
- implement MD_ListAllowExpn
- implement MD_ListCrackMessage
- implement MD_ListPrivate
- implement MD_SetAccessType
- implement MD_SetAllowIMAPAccess (**NEW**)
- implement MD_SetAllowPOPAccess (**NEW**)
- implement MD_SetDontExpirePassword
- implement MD_SetEditIMAPRules
- implement MD_SetEnableComAgent
- implement MD_SetEnableInstantMessaging
- implement MD_SetExemptFromAuthMatch
- implement MD_SetExtractInbound
- implement MD_SetExtractOutbound
- implement MD_SetFullName
- implement MD_SetHideFromEveryone
- implement MD_SetIsDisabled
- implement MD_SetIsForwarding
- implement MD_SetKeepForwardedMail
- implement MD_SetMailbox
- implement MD_SetRequireAppPassword

### Fixed

- fix MD_GetDomain
- fix MD_GetFullName
- fix MD_GetMailbox
- fix MD_SetFullName

### Changed

- optimize MD_SetIsFrozen

## 21.5.2-alpha.11 - 2022-04-23

### Added

- implement MD_GetCreatePlaceholderEvents
- implement MD_GetDeclineConflictingRequests
- implement MD_GetDeclineRecurringRequests
- implement MD_GetDomain
- implement MD_GetMailDir
- implement MD_SetAllowTFA
- implement MD_SetApplyDomainSignature
- implement MD_SetApplyQuotas
- implement MD_SetAutoDecode
- implement MD_SetComments
- implement MD_SetCreatePlaceholderEvents
- implement MD_SetDeclineConflictingRequests
- implement MD_SetDeclineRecurringRequests
- implement MD_SetDomain
- implement MD_SetMailDir
- implement MD_SetMaxMessageCount
- document semaphore APIs
- CHANGELOG.md created

---
> MDaemon is copyright © 1996-2024 [MDaemon Technologies Ltd.](https://mdaemon.com/pages/about-us)
---
[Home](readme.md)
