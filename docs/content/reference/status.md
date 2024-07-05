+++
title = "APIs implementation status"
sort_by = "weight"
weight = 200
+++
# APIs implementation status

## v24.0.1-alpha.33 Exports

### Top level (367 symbols)

| Name | ES Type |
|-----:|:-------:|
|`MD_AddMultiPOPItem`|function|
|`MD_AddRule`|function|
|`MD_AddUser`|function|
|`MD_AppPasswordCreate`|function|
|`MD_AppPasswordDelete`|function|
|`MD_AppPasswordDeleteAll`|function|
|`MD_AppPasswordGetAll`|function|
|`MD_AppPasswordGetByID`|function|
|`MD_AppPasswordGetCount`|function|
|`MD_AppPasswordRename`|function|
|`MD_AppPasswordValidate`|function|
|`MD_AttachmentLinkingDelete`|function|
|`MD_CalGetCalItem`|function|
|`MD_CalGetDefaultFolder`|function|
|`MD_CalInitCalItem`|function|
|`MD_CalInitCalItem2`|function|
|`MD_ChangeRule`|function|
|`MD_ClearListSettingsCache`|function|
|`MD_ClearSettingsCache`|function|
|`MD_ClusterGetEnabled`|function|
|`MD_ClusterGetLocalNodeId`|function|
|`MD_ClusterGetLocalServerGUID`|function|
|`MD_ClusterGetLocalServerId`|function|
|`MD_ClusterGetNodeId`|function|
|`MD_ClusterGetPrimaryComputerName`|function|
|`MD_ClusterGetServerGUID`|function|
|`MD_ClusterGetServerId`|function|
|`MD_ClusterLocalNodeIsPrimary`|function|
|`MD_CompromisedPasswordCheck`|function|
|`MD_ContactDeleteAllItems`|function|
|`MD_ContactGetAllItems`|function|
|`MD_ContactGetBlackListFolder`|function|
|`MD_ContactGetDefaultFolder`|function|
|`MD_ContactGetDomainAllowedSendersFolder`|function|
|`MD_ContactGetPublicFolder`|function|
|`MD_ContactGetWhiteListFolder`|function|
|`MD_ContactInitItem`|function|
|`MD_ContactPubAllowedSendersCheck`|function|
|`MD_CreateAlias`|function|
|`MD_CreateFileName`|function|
|`MD_CreateUserIMAPFolder`|function|
|`MD_DeleteAlias`|function|
|`MD_DeleteAllAliases`|function|
|`MD_DeleteDomain`|function|
|`MD_DeleteGateway`|function|
|`MD_DeleteList`|function|
|`MD_DeleteMessageFile`|function|
|`MD_DeleteMultiPOPItem`|function|
|`MD_DeleteRule`|function|
|`MD_DocumentCopyDocument`|function|
|`MD_DocumentCopyFileIntoFolder`|function|
|`MD_DocumentDeleteDocument`|function|
|`MD_DocumentGetDefaultFolder`|function|
|`MD_DocumentGetDescription`|function|
|`MD_DocumentGetFileName`|function|
|`MD_DocumentGetFileSize`|function|
|`MD_DocumentGetModifiedBy`|function|
|`MD_DocumentGetModifiedTime`|function|
|`MD_DocumentGetMultipleItems`|function|
|`MD_DocumentRenameDocument`|function|
|`MD_DocumentSetDescription`|function|
|`MD_EraseAutoResp`|function|
|`MD_ExportAllUsers`|function|
|`MD_FlagReloadUsers`|function|
|`MD_GatewayLicenseFull`|function|
|`MD_GetAccessType`|function|
|`MD_GetAllowChangeViaEmail`|function|
|`MD_GetAllowIMAPAccess`|function|
|`MD_GetAllowPOPAccess`|function|
|`MD_GetAllowTFA`|function|
|`MD_GetAppDir`|function|
|`MD_GetApplyDomainSignature`|function|
|`MD_GetApplyQuotas`|function|
|`MD_GetAttachmentLinking`|function|
|`MD_GetAutoDecode`|function|
|`MD_GetAutoRespInfo`|function|
|`MD_GetByAlias`|function|
|`MD_GetByEmail`|function|
|`MD_GetByFullName`|function|
|`MD_GetByMailDir`|function|
|`MD_GetByMailbox`|function|
|`MD_GetComments`|function|
|`MD_GetCreatePlaceholderEvents`|function|
|`MD_GetDBPath`|function|
|`MD_GetDeclineConflictingRequests`|function|
|`MD_GetDeclineRecurringRequests`|function|
|`MD_GetDirSize`|function|
|`MD_GetDoNotDisturb`|function|
|`MD_GetDomain`|function|
|`MD_GetDomainCount`|function|
|`MD_GetDomainIP`|function|
|`MD_GetDomainIP6`|function|
|`MD_GetDomainNameUsingIP`|function|
|`MD_GetDomainNames`|function|
|`MD_GetDomainsGAB`|function|
|`MD_GetDontExpirePassword`|function|
|`MD_GetEditIMAPRules`|function|
|`MD_GetEmail`|function|
|`MD_GetEnableAIMessageFeatures`|function|
|`MD_GetEnableComAgent`|function|
|`MD_GetEnableInstantMessaging`|function|
|`MD_GetEnableMultiPOP`|function|
|`MD_GetExemptFromAuthMatch`|function|
|`MD_GetExtractInbound`|function|
|`MD_GetExtractOutbound`|function|
|`MD_GetFileCount`|function|
|`MD_GetForwardingInfo`|function|
|`MD_GetFree`|function|
|`MD_GetFullName`|function|
|`MD_GetGatewayCount`|function|
|`MD_GetGatewayNames`|function|
|`MD_GetHideFromEveryone`|function|
|`MD_GetIsAdmin`|function|
|`MD_GetIsDisabled`|function|
|`MD_GetIsDomainAdmin`|function|
|`MD_GetIsForwarding`|function|
|`MD_GetIsFrozen`|function|
|`MD_GetKeepForwardedMail`|function|
|`MD_GetLicensesUsed`|function|
|`MD_GetListBoolKey`|function|
|`MD_GetListLongKey`|function|
|`MD_GetListStringKey`|function|
|`MD_GetMailDir`|function|
|`MD_GetMailbox`|function|
|`MD_GetMaxDiskSpace`|function|
|`MD_GetMaxMessageCount`|function|
|`MD_GetMultiPOPItems`|function|
|`MD_GetMultiPOPMaxMessageAge`|function|
|`MD_GetMultiPOPMaxMessageSize`|function|
|`MD_GetMustChangePassword`|function|
|`MD_GetMyIPAddresses`|function|
|`MD_GetPassword`|function|
|`MD_GetPasswordCreateDate`|function|
|`MD_GetProcessCalendarRequests`|function|
|`MD_GetPruningFlags`|function|
|`MD_GetQuotaCounts`|function|
|`MD_GetRemoteQueues`|function|
|`MD_GetRequireAppPassword`|function|
|`MD_GetRequireTFA`|function|
|`MD_GetSharedDomainInfo`|function|
|`MD_GetSharedListMemberInfo`|function|
|`MD_GetSharedUserInfo`|function|
|`MD_GetSignatureFile`|function|
|`MD_GetSubAddressing`|function|
|`MD_GetUseDefaultPruning`|function|
|`MD_GetUserIMAPFolderPath`|function|
|`MD_GetUserInfo`|function|
|`MD_GroupAddMember`|function|
|`MD_GroupClearCache`|function|
|`MD_GroupCopy`|function|
|`MD_GroupCreate`|function|
|`MD_GroupDelete`|function|
|`MD_GroupExists`|function|
|`MD_GroupFindMember`|function|
|`MD_GroupGetADGroup`|function|
|`MD_GroupGetAll`|function|
|`MD_GroupGetAllWithDesc`|function|
|`MD_GroupGetCount`|function|
|`MD_GroupGetMembers`|function|
|`MD_GroupGetUserGroups`|function|
|`MD_GroupInit`|function|
|`MD_GroupRemoveMember`|function|
|`MD_GroupRename`|function|
|`MD_GroupRenameMember`|function|
|`MD_GroupUpdate`|function|
|`MD_GroupWrite`|function|
|`MD_InitDomainInfo`|function|
|`MD_InitGatewayInfo`|function|
|`MD_InitListInfo`|function|
|`MD_InitMessageInfo`|function|
|`MD_InitMultiPOPItem`|function|
|`MD_InitUserInfo`|function|
|`MD_InitUserInfoByTemplate`|function|
|`MD_InvalidateAliases`|function|
|`MD_InvalidateBadPasswords`|function|
|`MD_InvalidateLANIPs`|function|
|`MD_IsAVLicenseTooSmall`|function|
|`MD_IsAlreadyAQueue`|function|
|`MD_IsDBConnected`|function|
|`MD_IsDynamicPasswordStr`|function|
|`MD_IsLicenseActive`|function|
|`MD_IsPasswordTooOld`|function|
|`MD_IsProVersion`|function|
|`MD_IsSecurePasswordStr`|function|
|`MD_IsSystemAddress`|function|
|`MD_IsTrialVersion`|function|
|`MD_IsValidAlias`|function|
|`MD_ListAddMember`|function|
|`MD_ListAllowExpn`|function|
|`MD_ListAllowSubscribe`|function|
|`MD_ListArchiveCatalog`|function|
|`MD_ListCrackMessage`|function|
|`MD_ListDefaultMode`|function|
|`MD_ListDigestMBF`|function|
|`MD_ListEnabled`|function|
|`MD_ListExists`|function|
|`MD_ListGetCount`|function|
|`MD_ListGetLastAccessTime`|function|
|`MD_ListGetNames`|function|
|`MD_ListGetNamesByMember`|function|
|`MD_ListGetPathName`|function|
|`MD_ListGetReminderPath`|function|
|`MD_ListInsertCaption`|function|
|`MD_ListIsDBReady`|function|
|`MD_ListIsMember`|function|
|`MD_ListMemberCount`|function|
|`MD_ListModerated`|function|
|`MD_ListMsgTooBigNote`|function|
|`MD_ListNotificationAddress`|function|
|`MD_ListPassword`|function|
|`MD_ListPrecedenceLevel`|function|
|`MD_ListPrivate`|function|
|`MD_ListRemoveFromAll`|function|
|`MD_ListRemoveMember`|function|
|`MD_ListReplaceMember`|function|
|`MD_ListSetDigest`|function|
|`MD_ListSetNomail`|function|
|`MD_ListSetNormal`|function|
|`MD_ListSetReadOnly`|function|
|`MD_ListSetRealName`|function|
|`MD_ListSubscribeNote`|function|
|`MD_ListSuppressed`|function|
|`MD_ListUnsubscribeNote`|function|
|`MD_ListUpdateDomain`|function|
|`MD_ListWriteMember`|function|
|`MD_LogonUser`|function|
|`MD_MoveRuleDown`|function|
|`MD_MoveRuleUp`|function|
|`MD_NoteDeleteAllAttachments`|function|
|`MD_NoteDeleteAllItems`|function|
|`MD_NoteGetAllItems`|function|
|`MD_NoteGetDefaultFolder`|function|
|`MD_NoteGetNoteItem`|function|
|`MD_NoteInitNoteItem`|function|
|`MD_NoteItemCompare`|function|
|`MD_NoteWriteNoteItem`|function|
|`MD_PostAppMessage`|function|
|`MD_ReadRule`|function|
|`MD_RegisterWindow`|function|
|`MD_ReloadUsers`|function|
|`MD_RenameDomain`|function|
|`MD_RenameUserFolder`|function|
|`MD_RenameUserIMAPFolder`|function|
|`MD_RuleStringToRuleStruct`|function|
|`MD_RuleStructToRuleString`|function|
|`MD_SendAppMessage`|function|
|`MD_SendInstantMessage`|function|
|`MD_SetAccessType`|function|
|`MD_SetAllowChangeViaEmail`|function|
|`MD_SetAllowIMAPAccess`|function|
|`MD_SetAllowPOPAccess`|function|
|`MD_SetAllowTFA`|function|
|`MD_SetApplyDomainSignature`|function|
|`MD_SetApplyQuotas`|function|
|`MD_SetAttachmentLinking`|function|
|`MD_SetAutoDecode`|function|
|`MD_SetComments`|function|
|`MD_SetCreatePlaceholderEvents`|function|
|`MD_SetDeclineConflictingRequests`|function|
|`MD_SetDeclineRecurringRequests`|function|
|`MD_SetDomain`|function|
|`MD_SetDontExpirePassword`|function|
|`MD_SetEditIMAPRules`|function|
|`MD_SetEnableAIMessageFeatures`|function|
|`MD_SetEnableComAgent`|function|
|`MD_SetEnableInstantMessaging`|function|
|`MD_SetEnableMultiPOP`|function|
|`MD_SetExemptFromAuthMatch`|function|
|`MD_SetExtractInbound`|function|
|`MD_SetExtractOutbound`|function|
|`MD_SetFullName`|function|
|`MD_SetGhostCount`|function|
|`MD_SetHideFromEveryone`|function|
|`MD_SetIsDisabled`|function|
|`MD_SetIsDomainAdmin`|function|
|`MD_SetIsForwarding`|function|
|`MD_SetIsFrozen`|function|
|`MD_SetKeepForwardedMail`|function|
|`MD_SetMailDir`|function|
|`MD_SetMailbox`|function|
|`MD_SetMaxDiskSpace`|function|
|`MD_SetMaxMessageCount`|function|
|`MD_SetMultiPOPItems`|function|
|`MD_SetMultiPOPMaxMessageAge`|function|
|`MD_SetMultiPOPMaxMessageSize`|function|
|`MD_SetMustChangePassword`|function|
|`MD_SetNotificationFlag`|function|
|`MD_SetPassword`|function|
|`MD_SetProcessCalendarRequests`|function|
|`MD_SetRequireAppPassword`|function|
|`MD_SetRequireTFA`|function|
|`MD_SetSubAddressing`|function|
|`MD_SetUseDefaultPruning`|function|
|`MD_SetUserInfo`|function|
|`MD_SetupTicketRules`|function|
|`MD_SpoolMessage`|function|
|`MD_StripSubAddressedPath`|function|
|`MD_TaskDeleteAllItems`|function|
|`MD_TaskDeleteTaskItem`|function|
|`MD_TaskGetAllItems`|function|
|`MD_TaskGetDefaultFolder`|function|
|`MD_TaskGetIDFromiCalUid`|function|
|`MD_TaskGetTaskItem`|function|
|`MD_TaskInitTaskItem`|function|
|`MD_TemplateCopy`|function|
|`MD_TemplateCreate`|function|
|`MD_TemplateDelete`|function|
|`MD_TemplateExists`|function|
|`MD_TemplateGetAll`|function|
|`MD_TemplateGetFlags`|function|
|`MD_TemplateRename`|function|
|`MD_TemplateSetFlags`|function|
|`MD_TemplateWrite`|function|
|`MD_TranslateAlias`|function|
|`MD_UnregisterWindow`|function|
|`MD_UpdateSuppressList`|function|
|`MD_UserCount`|function|
|`MD_UserExists`|function|
|`MD_UserLicenseFull`|function|
|`MD_ValidateUser`|function|
|`MD_ValidateUserEx`|function|
|`MD_VerifyAccountDB`|function|
|`MD_VerifyDomainInfo`|function|
|`MD_VerifyGatewayInfo`|function|
|`MD_VerifyListInfo`|function|
|`MD_VerifyMessageInfo`|function|
|`MD_VerifyUserInfo`|function|
|`MD_WriteDomain`|function|
|`MD_WriteGateway`|function|
|`MD_WriteList`|function|
|`domainExists`|function|
|`domainExistsSync`|function|
|`gatewayExistsSync`|function|
|`getMdInfo`|function|
|`getModuleInfo`|function|
|`isBadHandle`|function|
|`isReady`|boolean|
|`login`|function|
|`loginSync`|function|
|`mdAppPath`|string|
|`path`|string|
|`readDocumentInfo`|function|
|`readDocumentInfoSync`|function|
|`readDomainGateways`|function|
|`readDomainGatewaysSync`|function|
|`readDomains`|function|
|`readDomainsSync`|function|
|`readMailingList`|function|
|`readMailingListMembers`|function|
|`readMailingListMembersSync`|function|
|`readMailingListSync`|function|
|`readMailingLists`|function|
|`readMailingListsSync`|function|
|`readRules`|function|
|`readRulesSync`|function|
|`readUserGroups`|function|
|`readUserGroupsSync`|function|
|`readUserRoles`|function|
|`readUserRolesSync`|function|
|`readUserTemplates`|function|
|`readUserTemplatesSync`|function|
|`readUsers`|function|
|`readUsersSync`|function|
|`sem`|object|
|`version`|string|
|`versions`|object|
|`versionsMatch`|boolean|

### `sem` object (74 symbols)

| Name | ES Type |
|-----:|:-------:|
|`alert`|function|
|`clearQuotaCounts`|function|
|`createWatchdog`|function|
|`delUser`|function|
|`initiateAntivirusDefinitionUpdate`|function|
|`initiateBadQueueDelivery`|function|
|`initiateHoldingQueueProcessing`|function|
|`initiateListDigests`|function|
|`initiateRemoteMailCheckAndDelivery`|function|
|`initiateRemoteQueueProcessing`|function|
|`initiateRetryQueueProcessing`|function|
|`initiateSpamFilterUpdate`|function|
|`lockProcessing`|function|
|`redrawTrayIcon`|function|
|`reloadAccountGroupsConfig`|function|
|`reloadActiveSyncUsersConfig`|function|
|`reloadAliasConfig`|function|
|`reloadAllCachedConfig`|function|
|`reloadArchivingWhiteListConfig`|function|
|`reloadAttachmentLinkingConfig`|function|
|`reloadAutoPruningConfig`|function|
|`reloadAutoresponderApprovedAttachmentsConfig`|function|
|`reloadAutoresponderExceptionConfig`|function|
|`reloadBadPasswordConfig`|function|
|`reloadBatvConfig`|function|
|`reloadBlackListConfigAndClearCachedDomainConfig`|function|
|`reloadCatalogsConfig`|function|
|`reloadColorizedLogsConfig`|function|
|`reloadContentFilterConfig`|function|
|`reloadCredentialsMatchWhiteList`|function|
|`reloadDNSBLWhiteListConfig`|function|
|`reloadDmarcConfig`|function|
|`reloadDmarcWhiteList`|function|
|`reloadDnsConfig`|function|
|`reloadDomainSharingConfig`|function|
|`reloadDomainsConfig`|function|
|`reloadGatewaysConfig`|function|
|`reloadGreylistingConfig`|function|
|`reloadHeaderTranslationConfig`|function|
|`reloadHostScreenConfig`|function|
|`reloadIPScreenConfig`|function|
|`reloadIPShieldConfig`|function|
|`reloadInactiveAccountExceptionConfig`|function|
|`reloadLanDomainsConfigs`|function|
|`reloadLanIPsConfig`|function|
|`reloadLdapAndGatewayUserConfig`|function|
|`reloadLoggingConfig`|function|
|`reloadMailingListsConfig`|function|
|`reloadMxCache`|function|
|`reloadNoPriorityConfig`|function|
|`reloadPriorityMailConfig`|function|
|`reloadPublicSuffixConfig`|function|
|`reloadReverseLookupsExceptionConfig`|function|
|`reloadScheduleConfig`|function|
|`reloadSmartSpoolingWhiteListConfig`|function|
|`reloadSpamBotDetectionConfig`|function|
|`reloadSpamFilterWhiteListAndSpamd`|function|
|`reloadSpamHoneypotsConfig`|function|
|`reloadSpfDkimVbrConfig`|function|
|`reloadStartTLSWhiteListConfig`|function|
|`reloadStartTlsRequiredConfig`|function|
|`reloadTarpitAndDynamicScreeningConfig`|function|
|`reloadTrustedDomainsAndAddresses`|function|
|`reloadUserList`|function|
|`restartContentFilter`|function|
|`restartMDaemon`|function|
|`restartMingerServer`|function|
|`restartWorldClientServer`|function|
|`runAclFileCleanup`|function|
|`shutDownMDaemon`|function|
|`startBayesianLearning`|function|
|`unlockProcessing`|function|
|`updateDmarcPublicSuffixConfig`|function|
|`watchdogExists`|function|