# Unofficial Node.js binding for MDaemon APIs

> node-mdaemon-api 21.0.3-alpha.5

- [1. Requirements](#1-requirements)
- [2. How to install](#2-how-to-install)
- [3. How to use](#3-how-to-use)
- [4. APIs implementation status](#4-apis-implementation-status)
  - [4.1. Application level functions](#41-application-level-functions)
  - [4.2. Database functions](#42-database-functions)
  - [4.3. Messaging functions](#43-messaging-functions)
  - [4.4. Domain management functions](#44-domain-management-functions)
  - [4.5. Account grouping functions](#45-account-grouping-functions)
  - [4.6. Account management functions](#46-account-management-functions)
  - [4.7. IMAP folder and rule management functions](#47-imap-folder-and-rule-management-functions)
  - [4.8. Mailing list management functions](#48-mailing-list-management-functions)
  - [4.9. Gateway related functions](#49-gateway-related-functions)
  - [4.10. Alias related functions](#410-alias-related-functions)
  - [4.11. Undocumented APIs](#411-undocumented-apis)
    - [4.11.1. Application](#4111-application)
    - [4.11.2. Accounts](#4112-accounts)
    - [4.11.3. Clustering](#4113-clustering)
    - [4.11.4. Domains](#4114-domains)
    - [4.11.5. Messagging](#4115-messagging)
- [5. Legal disclaimer](#5-legal-disclaimer)
- [6. License](#6-license)

## 1. Requirements

This package is intended for

- Microsoft Windows 10 64 bit (or newer)
- Microsoft Windows Server 2012 R2 64 bit (or newer)
- MDaemon 21.0.0 64-bit (or newer)
- Node.js 14.x LTS for Windows 64 bit, i.e. with N-API 7 support (or newer)

## 2. How to install

1. select a host with [MDaemon (64 bit)](https://www.altn.com/Products/MDaemon-Email-Server-Windows/)
   already installed;
2. install [Node.js LTS (64 bit) for Windows](https://nodejs.org/en/download/)
   on that host;
3. open a command shell (aka "DOS prompt");
4. create a new directory, say `test-md-node`;
5. CD to that directory (`cd test-md-node`);
6. run `node --version` and check it correctly reports Node's version;
7. initialize a Node.js project with `npm init -y`;
8. run `npm install node-mdaemon-api`;
9. import `node-mdaemon-api` in your `index.js` as `const md = require('node-mdaemon-api');`;
10. use MDaemon's native APIs via `md` object.

## 3. How to use

Minimum [ECMASCript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
example:

```javascript
const md = require('node-mdaemon-api');

if (md && md.isReady) {
  console.log("MDaemon ready!");
} else {
  console.error("MDaemon not available.");
}
```

Minimum [TypeScript](https://www.typescriptlang.org/docs/) example:

```typescript
import { isReady, MD_GetDomainNames } from "node-mdaemon-api";

function getDomains(pattern?: RegExp): string[] {
    const domains: string[] = isReady ? MD_GetDomainNames() ?? [] : [];
    return pattern ? domains.filter(d => pattern.test(d)) : domains;
}
getDomains().forEach(domainName => console.log(`- ${domainName}`));
```

## 4. APIs implementation status

All functions available in official MDaemon® SDK are available to
Node.js via `node-mdaemon-api`, but
most of them are *unimplemented*.

Unimplemented APIs are due either to:

- API binding code to be written;
- API is undocumented.

APIs are grouped below as documented in official MDaemon® SDK.

### 4.1. Application level functions

- [x] `MD_RegisterWindow(Handle: Buffer): boolean;`
- [x] `MD_UnregisterWindow(Handle: Buffer): boolean;`
- [x] `MD_GetSharedUserInfo(): MD_UserInfo;`
- [x] `MD_ReloadUsers(): void;`
- [x] `MD_CreateFileName(RootPath: string, Importance: number, Prefix: string, Extension: string): string;` (*to be tested*)

### 4.2. Database functions

- [x] `MD_GetAppDir(): string;`
- [x] `MD_GetDBPath(db: MdDatabase): string;`

### 4.3. Messaging functions

- [x] `MD_InitMessageInfo(): MD_MessageInfo;`
- [x] `MD_VerifyMessageInfo(MessageInfo: MD_MessageInfo): MdVerifyMessageInfoResult;`
- [x] `MD_SpoolMessage(MessageInfo: MD_MessageInfo): MdSpoolMessageResult;`

### 4.4. Domain management functions

- [x] `MD_GetDomainNames(): string[];`
- [x] `MD_GetDomainCount(): number;`
- [x] `MD_GetDomainNameUsingIP(IP?: string): string;`
- [ ] `MD_GetDomainsGab();`
- [x] `MD_InitDomainInfo(Name: string): MD_Domain;`
- [ ] `MD_VerifyDomainInfo();`
- [ ] `MD_UpdatesuppressionList();`
- [x] `MD_RenameDomain(OldDomainName: string, NewDomainName: string): boolean;`
- [ ] `MD_WriteDomain();`
- [x] `MD_DeleteDomain(Name: string): void;`

### 4.5. Account grouping functions

- [x] `MD_GroupInit(GroupName?: string): MD_Group;`
- [x] `MD_GroupGetCount(): number;`
- [ ] `MD_GroupUpdate();`
- [ ] `MD_GroupWrite();`
- [ ] `MD_GroupSetUserGroups()`
- [ ] `MD_GroupGetUserGroups();`
- [ ] `MD_GroupExists();`
- [ ] `MD_GroupGetMembers();`
- [ ] `MD_GroupAddMember();`
- [ ] `MD_GroupRemoveMember();`
- [ ] `MD_GroupRenameMember();`
- [ ] `MD_GroupCreate();`
- [ ] `MD_GroupRename();`
- [ ] `MD_GroupDelete();`
- [ ] `MD_GroupGetAll();`
- [ ] `MD_GroupGetAllWithDesc();`
- [ ] `MD_GroupFree();`
- [x] `MD_GroupClearCache(): void;`
- [ ] `MD_GroupFindMember();`
- [ ] `MD_GroupGetADGroup();`

### 4.6. Account management functions

- [x] `MD_InitUserInfo(): MD_UserInfo;`
- [x] `MD_GetUserInfo(hUser: Buffer): MD_UserInfo | undefined;`
- [ ] `MD_SetUserInfo();`
- [ ] `MD_VerifyUserInfo();`
- [ ] `MD_AddUser();`
- [ ] `MD_ChangeUser();`
- [ ] `MD_DeleteUser();`
- [ ] `MD_FindFirst();`
- [ ] `MD_FindNext();`
- [ ] `MD_FindClose();`
- [x] `MD_GetByEmail(Email: string): Buffer | undefined;`
- [x] `MD_GetByFullName(FullName: string, Domain: string): Buffer | undefined;`
- [x] `MD_GetByMailbox(Mailbox: string, Domain: string): Buffer | undefined;`
- [x] `MD_GetByMailDir(MailDir: string, Domain: string): Buffer | undefined;`
- [ ] `MD_GetByAlias();`
- [x] `MD_GetFree(hUser: Buffer): void;`
- [x] `MD_UserExists(address: string): boolean;`
- [x] `MD_UserCount(): number;`
- [x] `MD_ValidateUser(hUser: Buffer, Password: string): boolean;`
- [x] `MD_LogonUser(Email: string, Password: string, IP?: string): boolean;`
- [ ] `MD_FilterString();`
- [ ] `MD_FilterUserInfo();`
- [ ] `MD_GetEmail();`
- [ ] `MD_GetMailbox();`
- [ ] `MD_SetMailbox();`
- [ ] `MD_GetDomain();`
- [ ] `MD_SetDomain();`
- [ ] `MD_GetFullName();`
- [ ] `MD_SetFullName();`
- [ ] `MD_GetMailDir();`
- [ ] `MD_SetMailDir();`
- [ ] `MD_GetPassword();`
- [ ] `MD_SetPassword();`
- [ ] `MD_GetAutoDecode();`
- [ ] `MD_SetAutoDecode();`
- [ ] `MD_GetIsForwarding();`
- [ ] `MD_SetIsForwarding();`
- [ ] `MD_GetAllowPOPAccess();`
- [ ] `MD_GetAllowIMAPAccess();`
- [ ] `MD_GetAllowAccess();`
- [ ] `MD_SetAllowAccess();`
- [ ] `MD_SetAccessType();`
- [ ] `MD_GetAllowChangeViaEmail();`
- [ ] `MD_SetAllowChangeViaEmail();`
- [ ] `MD_GetKeepForwardedMail();`
- [ ] `MD_SetKeepForwardedMail();`
- [ ] `MD_GetHideFromEveryone();`
- [ ] `MD_SetHideFromEveryone();`
- [ ] `MD_GetProcessCalendarRequests();`
- [ ] `MD_SetProcessCalendarRequests();`
- [ ] `MD_GetDeclineRecurringRequests();`
- [ ] `MD_SetDeclineRecurringRequests();`
- [ ] `MD_GetCreatePlaceholderEvents();`
- [ ] `MD_SetCreatePlaceholderEvents();`
- [ ] `MD_GetApplyQuotas();`
- [ ] `MD_SetApplyQuotas();`
- [ ] `MD_GetEnableMultiPOP();`
- [ ] `MD_SetEnableMultiPOP();`
- [ ] `MD_GetCanModifyGAB();`
- [x] `MD_SetCanModifyGAB(hUser: Buffer, Value: boolean): void;` (*deprecated*)
- [ ] `MD_GetMailRestrictions();`
- [ ] `MD_SetMailRestrictions();`
- [ ] `MD_GetMaxDiskSpace();`
- [ ] `MD_SetMaxDiskSpace();`
- [ ] `MD_GetMaxMessageCount();`
- [ ] `MD_SetMaxMessageCount();`
- [x] `MD_GetForwardingInfo(hUser: Buffer): MD_Forwarding;`
- [ ] `MD_SetForwardingInfo();`
- [x] `MD_GetAutoRespInfo(hUser: Buffer): MD_AutoResponder;`
- [ ] `MD_SetAutoRespInfo();`
- [ ] `MD_EraseAutoResp();`
- [ ] `MD_GetMailFormat();`
- [ ] `MD_SetMailFormat();`
- [x] `MD_GetFileCount(hUser: Buffer): number | undefined;`
- [ ] `MD_GetQuotaCounts();`
- [ ] `MD_UpdateQuotaCounts();`
- [ ] `MD_GetDirSize();`
- [ ] `MD_GetWebConfigBit();`
- [ ] `MD_SetWebConfigBit();`
- [ ] `MD_GetAccessWorldClient();`
- [ ] `MD_SetAccessWorldClient();`
- [ ] `MD_GetAccessWebConfig();`
- [ ] `MD_SetAccessWebConfig();`
- [x] `MD_GetIsAdmin(hUser: Buffer): boolean;`
- [ ] `MD_SetIsAdmin();`
- [ ] `MD_GetEditFullName();`
- [ ] `MD_SetEditFullName();`
- [ ] `MD_GetEditPassword();`
- [ ] `MD_SetEditPassword();`
- [ ] `MD_GetEditMailDir();`
- [ ] `MD_SetEditMailDir();`
- [ ] `MD_GetEditFwd();`
- [ ] `MD_SetEditFwd();`
- [ ] `MD_GetEditAdvFwd();`
- [ ] `MD_SetEditAdvFwd();`
- [ ] `MD_GetEditEveryone();`
- [ ] `MD_SetEditEveryone();`
- [ ] `MD_GetEditMailRestrictions();`
- [ ] `MD_SetEditMailRestrictions();`
- [ ] `MD_GetEditQuotas();`
- [ ] `MD_SetEditQuotas();`
- [ ] `MD_GetEditMultiPOP();`
- [ ] `MD_SetEditMultiPOP();`
- [ ] `MD_GetEditAutoResponder();`
- [ ] `MD_SetEditAutoResponder();`
- [ ] `MD_GetEditIMAPRules();`
- [ ] `MD_SetEditIMAPRules();`
- [ ] `MD_IsDynamicPasswordStr();`
- [ ] `MD_IsSecurePasswordStr();`
- [ ] `MD_GetMultiPOPMaxMessageAge();`
- [ ] `MD_SetMultiPOPMaxMessageAge();`
- [ ] `MD_GetMultiPOPMaxMessageSize();`
- [ ] `MD_SetMultiPOPMaxMessageSize();`
- [ ] `MD_RestrictInboundMail();`
- [ ] `MD_SetInboundMailRestrictions();`
- [ ] `MD_RestrictOutboundMail();`
- [ ] `MD_SetOutboundMailRestrictions();`
- [x] `MD_GetPruningFlags(hUser: Buffer): MdPruningFlags;`
- [ ] `MD_SetPruningFlags();`
- [ ] `MD_GetUseDefaultPruning();`
- [ ] `MD_SetUseDefaultPruning();`
- [ ] `MD_GetAddrBookParms();`
- [ ] `MD_SetAddrBookParms();`

### 4.7. IMAP folder and rule management functions

- [ ] `MD_FindFirstRule();`
- [ ] `MD_FindNextRule();`
- [ ] `MD_GetEditIMAPRules();`
- [ ] `MD_SetEditIMAPRules();`
- [ ] `MD_ReadRule();`
- [ ] `MD_RuleStructToRuleString();`
- [ ] `MD_RuleStringToRuleStruct();`
- [ ] `MD_DeleteRule();`
- [ ] `MD_AddRule();`
- [ ] `MD_ChangeRule();`
- [ ] `MD_GetIMAPFolders();`
- [ ] `MD_CreateIMAPFolder();`
- [ ] `MD_GetPublicIMAPFolderAccess();`
- [ ] `MD_PublicIMAPFolderACLRemove();`
- [ ] `MD_PublicIMAPFolderACLUpdate();`

### 4.8. Mailing list management functions

- [ ] `MD_ListSyncWithPublicFolder();`
- [x] `MD_InitListInfo(ListName: string): MD_List;`
- [ ] `MD_VerifyListInfo();`
- [ ] `MD_WriteList();`
- [x] `MD_DeleteList(ListName: string): void;`
- [x] `MD_ClearListSettingsCache(ListName?: string): void;`
- [ ] `MD_ListPrivate();`
- [ ] `MD_ListAllowExpn();`
- [ ] `MD_ListCrackMessage();`
- [ ] `MD_ListRouteMessage();`
- [ ] `MD_ListUseMemberNames();`
- [ ] `MD_ListUseListName();`
- [ ] `MD_ListInsertCaption();`
- [ ] `MD_ListForceUniqueID();`
- [ ] `MD_ListPasswordPost();`
- [ ] `MD_ListIgnoreRcptErrors();`
- [ ] `MD_ListNameInSubject();`
- [ ] `MD_ListThreadNumbInSubject();`
- [ ] `MD_ListAuthSubscribe();`
- [ ] `MD_ListAuthAutoSubscribe();`
- [ ] `MD_ListAuthUnsubscribe();`
- [ ] `MD_ListAuthUnsubscribe();`
- [ ] `MD_ListEnableDigest();`
- [ ] `MD_ListForceDigestUse();`
- [ ] `MD_ListAM();`
- [ ] `MD_ListPM();`
- [ ] `MD_ListArchiveDigest();`
- [ ] `MD_ListInformNonMember();`
- [ ] `MD_ListSendStatusMessages();`
- [ ] `MD_ListAutoPrune();`
- [ ] `MD_ListUsePublicFolder();`
- [ ] `MD_ListAllowUnsubscribe();`
- [ ] `MD_ListMaxMessageSize();`
- [ ] `MD_ListMaxMembers();`
- [ ] `MD_ListRoutingLimit();`
- [ ] `MD_ListMaxMessageCount();`
- [ ] `MD_ListMaxLineCount();`
- [ ] `MD_ListApplyHeader();`
- [ ] `MD_ListApplyFooter();`
- [ ] `MD_ListKillFile();`
- [ ] `MD_ListRemoteHost();`
- [ ] `MD_ListWelcomeFile();`
- [ ] `MD_ListReplyAddress();`
- [ ] `MD_ListPublicFolderName();`
- [ ] `MD_ListDefaultMode();`
- [ ] `MD_ListAddMember();`
- [ ] `MD_ListWriteMember();`
- [ ] `MD_ListSetRealName();`
- [ ] `MD_ListSetDigest();`
- [ ] `MD_ListSetNomail();`
- [ ] `MD_ListSuppress();`
- [ ] `MD_ListIsMember();`
- [ ] `MD_ListRemoveMember();`
- [ ] `MD_LIstRemoveFromAll();`
- [ ] `MD_ListNotificationAddress();`
- [ ] `MD_ListPrecedenceLevel();`
- [ ] `MD_ListMemberCount();`
- [ ] `MD_ListSubscribeNote();`
- [ ] `MD_ListUnsubscribeNote();`
- [ ] `MD_ListMsgTooBigNote();`
- [ ] `MD_ListPassword();`
- [ ] `MD_ListArchiveCatalog();`
- [ ] `MD_ListDigestMBF();`
- [ ] `MD_ListModerated();`
- [ ] `MD_ListAllowSubscribe();`
- [ ] `MD_ListSendSubAuth();`
- [ ] `MD_ListSendUnSubAuth();`

### 4.9. Gateway related functions

- [x] `MD_GetGatewayCount(): number;`
- [ ] `MD_GetGatewayNames();`
- [ ] `MD_InitGatewayInfo();`
- [ ] `MD_VerifyGatewayInfo();`
- [ ] `MD_WriteGateway();`
- [ ] `MD_DeleteGateway();`

### 4.10. Alias related functions

- [ ] `MD_DeleteAllAliases();`
- [ ] `MD_DeleteAlias();`
- [ ] `MD_CreateAlias();`

### 4.11. Undocumented APIs

#### 4.11.1. Application

- [x] `MD_UserLicenseFull(): boolean;`

#### 4.11.2. Accounts

- [x] `MD_GetEnableActiveSync(hUser: Buffer): boolean;`
- [x] `MD_GetIsDomainAdmin(hUser: Buffer, Domain: string): boolean;`
- [x] `MD_SetIsDomainAdmin(hUser: Buffer, Domain: string, Value: boolean): void;`

#### 4.11.3. Clustering

- [x] `MD_ClusterGetEnabled(): boolean;`
- [x] `MD_ClusterLocalNodeIsPrimary(): boolean;`

#### 4.11.4. Domains

- [x] `MD_GetDomainsGAB(Domain: string): string;`

#### 4.11.5. Messagging

- [x] `MD_SendInstantMessage(MessageInfo: MD_MessageInfo): number;`

## 5. Legal disclaimer

MDaemon® is a trademark of MDaemon Technologies, Ltd. MDaemon
Technologies makes no representations, endorsements, or warranties
regarding Third Party Products or Services.

## 6. License

node-mdaemon-api 21.0.3-alpha.5 license

Copyright (c) 2016-2021 Emanuele Aliberti, MTKA

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
