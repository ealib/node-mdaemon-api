# node-mdaemon-api Changelog

> **NOTE**: APIs marked *NEW* do not exist in MDaemon's native SDK, but
> are made available to the Node.js developer for ease of development
> and completeness.

## 21.5.2-alpha.12 - 2022-04-30

* fix MD_GetDomain
* fix MD_GetFullName
* fix MD_GetMailbox
* fix MD_SetFullName
* implement MD_GetAccessType (NEW)
* implement MD_GetAllowIMAPAccess
* implement MD_GetEditIMAPRules
* implement MD_GetExtractInbound
* implement MD_GetExtractOutbound
* implement MD_GetQuotaCounts
* implement MD_GetRequireAppPassword
* implement MD_ListAllowExpn
* implement MD_ListCrackMessage
* implement MD_ListPrivate
* implement MD_SetAccessType
* implement MD_SetAllowIMAPAccess (NEW)
* implement MD_SetAllowPOPAccess (NEW)
* implement MD_SetDontExpirePassword
* implement MD_SetEditIMAPRules
* implement MD_SetEnableComAgent
* implement MD_SetEnableInstantMessaging
* implement MD_SetExemptFromAuthMatch
* implement MD_SetExtractInbound
* implement MD_SetExtractOutbound
* implement MD_SetFullName
* implement MD_SetHideFromEveryone
* implement MD_SetIsDisabled
* implement MD_SetIsForwarding
* implement MD_SetKeepForwardedMail
* implement MD_SetMailbox
* implement MD_SetRequireAppPassword
* optimize MD_SetIsFrozen

## 21.5.2-alpha.11 - 2022-04-23

* implement MD_GetCreatePlaceholderEvents
* implement MD_GetDeclineConflictingRequests
* implement MD_GetDeclineRecurringRequests
* implement MD_GetDomain
* implement MD_GetMailDir
* implement MD_SetAllowTFA
* implement MD_SetApplyDomainSignature
* implement MD_SetApplyQuotas
* implement MD_SetAutoDecode
* implement MD_SetComments
* implement MD_SetCreatePlaceholderEvents
* implement MD_SetDeclineConflictingRequests
* implement MD_SetDeclineRecurringRequests
* implement MD_SetDomain
* implement MD_SetMailDir
* implement MD_SetMaxMessageCount
* document semaphore APIs
* CHANGELOG.md created
