/**
 * Type definitions for node-mdaemon-api 21.0.3-alpha.6
 * Project: Unofficial Node.js binding for MDaemon APIs
 * Definitions by: MTKA https://mtka.eu/
 * 
 * @module node-mdaemon-api
 */

declare module "node-mdaemon-api" {

    export interface VersionInfo {
        build: number;
        full?: string;
        major: number;
        minor: number;
        release: number;
        tag?: string;
    }
    export interface ModuleInfo {
        isPrerelease: boolean;
        isFreeVersion: boolean;
        version: VersionInfo;
    }
    export interface MdInfo {
        is64bit: boolean;
        isBetaVersion: boolean;
        isDebugVersion: boolean;
        isLicenseActive: boolean;
        isPresent: boolean;
        isProVersion: boolean;
        isTrialVersion: boolean;
        userCount: number;
        version: VersionInfo;
    }
    export interface SimpleListItem {
        id: string;
        name: string;
    }
    export interface UserListItem {
        Email: string;
        FullName: string;
    }

    // ----------------------------------------------------------------
    // node-mdaemon-api own APIs
    // ----------------------------------------------------------------

    /**
     * @summary Get MDaemon information.
     * 
     * @returns {MdInfo}
     */
    export function getMdInfo(): MdInfo;
    /**
     * Get module information.
     * 
     * @returns {ModuleInfo}
     */
    export function getModuleInfo(): ModuleInfo;
    /**
     * @summary Synchronously authenticate against MDaemon user database.
     * 
     * @param Email e-mail address
     * @param Password password
     * @see MD_LogonUser
     */
    export function loginSync(Email: string, Password: string): boolean;
    /**
     * @summary Authenticate against MDaemon user database.
     * 
     * @param Email  e-mail address
     * @param Password password
     * @param callback callback function called either on success, or on
     * failure. On failure, err contains the error and success is
     * undefined. On success, err is undefined and success is true.
     */
    export function login(Email: string, Password: string, callback: (err: Error | null, success?: boolean) => void): void;
    /**
     * @summary Synchronously read domain gateway names.
     * 
     * @returns {string[]}
     */
    export function readDomainGatewaysSync(): string[];
    /**
     * @summary Read domain gateway names.
     * 
     * @param callback 
     */
    export function readDomainGateways(callback: (err: Error | null, domainGateways?: string[]) => void): void;
    /**
     * @summary Synchronously get domain names managed by MDaemon.
     * @returns {string[]}
     */
    export function readDomainsSync(): string[];
    /**
     * @summary Get domain names managed by MDaemon.
     * @param callback 
     */
    export function readDomains(callback: (err: Error | null, domains?: string[]) => void): void;
    /**
     * 
     */
    export function readMailingListsSync(): string[];
    /**
     * 
     * @param callback 
     */
    export function readMailingLists(callback: (err: Error | null, mailingLists?: string[]) => void): void;
    /**
     * 
     */
    export function readUserGroupsSync(): SimpleListItem[];
    /**
     * 
     * @param callback 
     */
    export function readUserGroups(callback: (err: Error | null, userGroups?: SimpleListItem[]) => void): void;
    /**
     * 
     */
    export function readUserTemplatesSync(): SimpleListItem[];
    /**
     * 
     * @param callback 
     */
    export function readUserTemplates(callback: (err: Error | null, userTemplates?: SimpleListItem[]) => void): void;
    /**
     * 
     */
    export function readUsersSync(): UserListItem[];
    /**
     * 
     * @param callback 
     */
    export function readUsers(callback: (err: Error | null, users?: UserListItem[]) => void): void;
    /**
     * @summary True if MDaemon is present. False otherwise.
     * @readonly
     */
    export const isReady: boolean;
    /**
     * Predicate that holds when handle is a bad handle.
     * 
     * @param handle MDaemon handle or rule handle.
     */
    export function isBadHandle(handle: Buffer): boolean;
    /**
     * @summary Full path where mdaemon.exe is stored.
     * @readonly
     * @example C:\MDAEMON\App
     */
    export const mdAppPath: string;
    /**
     * @summary Module version
     * @readonly
     */
    export const version: string;
    /**
     * @summary Object that contains as many keys as *.exe and *.dll
     * are present in mdAppPath. Each key has a string value that is the
     * version number of the corresponding *.exe or *.dll.
     * @readonly
     */
    export const versions: { [moduleName: string]: VersionInfo };

    // ----------------------------------------------------------------
    // MDaemon APIs - MDUser
    // ----------------------------------------------------------------

    export interface MD_AD {
        Attribute: string;
        BaseDN: string;
        BindFlags: number;
        ContactSearchFilter: string;
        PageSize: number;
        Password: string;
        SearchFilter: string;
        SearchFlags: number;
        SearchScope: number;
        UserName: string;
    }
    export interface MD_AutoResponder {
        AddToList: string;
        Days: number;
        Enabled: boolean;
        EndTime: string;
        Exclude: string;
        PassMessage: boolean;
        Process: string;
        RemoveFromList: string;
        Script: string;
        StartTime: string;
    }
    export interface MdDomainFlags {
        ANTISPAM: boolean;
        ANTIVIRUS: boolean;
        BIND: boolean;
        RECURSEIMAP: boolean;
    }
    export interface MD_Domain {
        AdminList: string[];
        DomainName: string;
        DomainPOP_Throttle: number;
        FQDN: string;
        Flags: MdDomainFlags;
        IMAP_Throttle: number;
        IP6: string;
        IP: string;
        InboundSMTP_Throttle: number;
        MaxDeletedIMAPMessageAge: number;
        MaxInactive: number;
        MaxLists: number;
        MaxMessageAge: number;
        MaxUsers: number;
        MultiPOP_Throttle: number;
        OutboundSMTP_Throttle: number;
        POP_Throttle: number;
        SuppressList: string[];
    }
    export interface MD_Forwarding {
        AUTHLogon: string;
        AUTHPassword: string;
        Address: string;
        Host: string;
        Port: string;
        Schedule: MD_AutoResponder;
        SendAs: string;
    }
    export interface MD_Group {
        ADGroupName: string;
        DNDSchedule: MD_AutoResponder;
        Description: string;
        DisableComAgent: boolean;
        DisableInstantMessaging: boolean;
        GroupName: string;
        Priority: number;
        TemplateName: string;
    }
    export interface MD_ListMember {
        Email: string;
        ListName: string;
        RealName: string;
    }
    export interface MD_List {
        AD: MD_AD;
        AUTHLogon: string;
        AUTHPassword: string;
        ArchiveURL: string;
        CacheDirty: boolean;
        CatalogName: string;
        DefaultMode: number;
        DigestFlags: number;
        DigestMBF: string;
        FooterFilePath: string;
        HeaderFilePath: string;
        HelpURL: string;
        KillFilePath: string;
        LastAccessTime: string;
        ListDescription: string;
        ListFlags: number;
        ListIDText: string;
        ListName: string;
        ListPassword: string;
        MaxLineCount: number;
        MaxMembers: number;
        MaxMessageCount: number;
        MaxMessageSize: number;
        ModeratorEmail: string;
        NotificationEmail: string;
        ODBC: MD_ODBC;
        OwnerURL: string;
        PrecedenceLevel: number;
        PublicFolderName: string;
        RemoteHost: string;
        ReplyAddress: string;
        RoutingLimit: number;
        SendNotesTo: string;
        SubscribeURL: string;
        UnsubscribeURL: string;
        UserDefined: string;
        WelcomeFilePath: string;
    }
    export interface MD_ODBC {
        DSN: string;
        DigestQuery: string;
        EmailFieldMapping: string;
        FirstNameFieldMapping: string;
        LastNameFieldMapping: string;
        NormalQuery: string;
        Pass: string;
        PostOnlyQuery: string;
        ReadOnlyQuery: string;
        Table: string;
        User: string;
    }
    export enum MdMessagePriority {
        URGENT = 10,
        HIGH = 25,
        AUTH = 35,
        NORMAL = 50,
        LOW = 75,
        BULK = 80,
        RETRY = 90,
    }
    export interface MD_MessageInfo {
        AttachmentFilePath?: string;
        BodyFilePath?: string;
        CharSet?: string;
        ContentType?: string;
        From: string;
        MessageBody: string;
        Priority?: MdMessagePriority;
        RawFilePrefix?: string;
        RemoveAttachment?: boolean;
        Subject: string;
        To: string;
    }
    export interface MD_UserInfo {
        AccessType: string;
        AllowChangeViaEmail: boolean;
        AllowTFA: boolean;
        ApplyDomainSignature: boolean;
        ApplyQuotas: boolean;
        AttachmentLinking: boolean;
        AutoDecode: boolean;
        AutoResponder: MD_AutoResponder;
        CanModifyGAB: boolean;
        CheckAddrBook: boolean;
        Comments: string;
        CreatePlaceholderEvents: boolean;
        DeclineConflictingRequests: boolean;
        DeclineRecurringRequests: boolean;
        Domain: string;
        DontExpirePassword: boolean;
        Email: string;
        EnableComAgent: boolean;
        EnableInstantMessaging: boolean;
        EnableMultiPOP: boolean;
        EnableSubaddressing: boolean;
        ExemptFromAuthMatch: boolean;
        ExtractInbound: boolean;
        ExtractOutbound: boolean;
        Forwarding: MD_Forwarding;
        FullName: string;
        Groups: string;
        HideFromEveryone: boolean;
        IsDisabled: boolean;
        IsDomainAdmin: boolean;
        IsForwarding: boolean;
        IsFrozen: boolean;
        KeepForwardedMail: boolean;
        MailDir: string;
        MailFormat: string;
        Mailbox: string;
        MaxDeletedIMAPMessageAge: number;
        MaxDiskSpace: number;
        MaxInactive: number;
        MaxMessageAge: number;
        MaxMessageCount: number;
        MaxSentPerDay: number;
        MultiPOPMaxMessageAge: number;
        MultiPOPMaxMessageSize: number;
        MustChangePassword: boolean;
        NTAccount: string;
        Password: string;
        PasswordEx: string;
        ProcessCalendarRequests: boolean;
        RecurseIMAP: boolean;
        RequireTFA: boolean;
        RestrictIMAPAccess: boolean;
        RestrictPOPAccess: boolean;
        RestrictSMTPAccess: boolean;
        RestrictWAAccess: boolean;
        RestrictWCAccess: boolean;
        SecurePassword: string;
        TemplateFlags: number;
        TemplateName: string;
        UpdateAddrBook: boolean;
        UseDefaultPruning: boolean;
        UserDefined: string;
        WebConfig: number;
    }
    export type MdDatabase =
        'ALIASDB' |
        'AUTHDB' |
        'AUTORESPDB' |
        'DELUNLESSDB' |
        'DOMAINDB' |
        'DOMAINPOPDB' |
        'DVUNLESSDB' |
        'EXCEPTIONDB' |
        'FWDDB' |
        'FWDUNLESSDB' |
        'GATEWAYDB' |
        'HELPDB' |
        'IPCACHEDB' |
        'IPSCREENDB' |
        'IPSHIELDDB' |
        'LDAPDB' |
        'MDAEMONINIDB' |
        'MIMETYPEDB' |
        'MSGIDDB' |
        'MULTIPOPDB' |
        'MXCACHEDB' |
        'NOCACHEDB' |
        'NOCOMMANDDB' |
        'NOSUCHUSERDB' |
        'PRIORITYDB' |
        'RECEIPTDB' |
        'RELAYDB' |
        'RFC822TMPDB' |
        'SPAMBLOCKERDB' |
        'SPAMCACHEDB' |
        'SPAMEXCEPTDB' |
        'TRANSEXCPTDB' |
        'TRANSLATEDB' |
        'UIDLDB' |
        'UNSUBUSERDB' |
        'USERLISTDB';
    export type MdVerifyUserInfoLevel =
        'ACCOUNT' |
        'MAILDIR' |
        'FWD' |
        'QUOTAS' |
        'WEBCONFIG' |
        'OPTIONS' |
        'MULTIPOP' |
        'AUTORESP' |
        'ALL';
    export interface MdPruningFlags {
        MaxDeletedIMAPMessageAge?: number; // the maximum age for deleted IMAP messages
        MaxInactive?: number;              // max inactivity
        MaxMessageAge?: number;            // max message age
        RecurseIMAP?: boolean;             // IMAP pruning flag 
        UseDomainDefaults?: boolean;
    }
    export enum MdSpoolMessageResult {
        NOERROR = 0,
        MISSINGRAWPATH = 1,
        CANTGENRAWFILENAME = 2,
        CANTLOCKRAWFILE = 3,
        CANTCREATERAWFILE = 4,
        CANTACCESSBODYFILE = 5,
    }
    export enum MdVerifyMessageInfoResult {
        NOERROR = 0,
        MISSINGTO = 1,
        MISSINGFROM = 2,
        MISSINGBODY = 3,
        MISSINGBODYFILE = 4,
        MISSINGATTACHMENTFILE = 5,
    }
    export enum MdVerifyDomainInfoResult {
        NOERROR = 0,
        NODOMAINNAME = 1,
        INVALIDDOMAINNAME = 2,
    }
    export enum MdVerifyUserInfoResult {
        NOERROR = 0,
        INVALIDMAILBOX = 1,
        INVALIDDOMAIN = 2,
        NONLOCALDOMAIN = 4,
        POSTMASTER = 5,
        MBXHASDOMAIN = 6,
        INVALIDFULLNAME = 7,
        INVALIDPASSWORD = 8,
        INVALIDMAILDIR = 9,
    }
    export function MD_ClearListSettingsCache(ListName?: string): void;
    export function MD_ClusterGetEnabled(): boolean;
    export function MD_ClusterLocalNodeIsPrimary(): boolean;
    export function MD_CreateAlias(Email: string, Alias: string): boolean;
    export function MD_CreateFileName(RootPath: string, Importance: number, Prefix: string, Extension: string): string | undefined;
    export function MD_DeleteAlias(Alias: string, Email: string): boolean;
    export function MD_DeleteAllAliases(Email: string): boolean;
    export function MD_DeleteDomain(Name: string): void;
    export function MD_DeleteList(ListName: string): void;
    export function MD_GetAppDir(): string;
    export function MD_GetAutoRespInfo(hUser: Buffer): MD_AutoResponder;
    export function MD_GetByEmail(Email: string): Buffer | undefined;
    export function MD_GetByFullName(FullName: string, Domain: string): Buffer | undefined;
    export function MD_GetByMailDir(MailDir: string, Domain: string): Buffer | undefined;
    export function MD_GetByMailbox(Mailbox: string, Domain: string): Buffer | undefined;
    export function MD_GetDBPath(db: MdDatabase): string;
    export function MD_GetDomainCount(): number;
    export function MD_GetDomainNames(): string[];
    export function MD_GetDomainNameUsingIP(IP?: string): string;
    export function MD_GetDomainsGAB(Domain: string): string;
    export function MD_GetEnableActiveSync(hUser: Buffer): boolean;
    export function MD_GetFileCount(hUser: Buffer): number | undefined;
    export function MD_GetForwardingInfo(hUser: Buffer): MD_Forwarding;
    export function MD_GetFree(hUser: Buffer): void;
    export function MD_GetGatewayCount(): number;
    export function MD_GetIsAdmin(hUser: Buffer): boolean;
    export function MD_GetIsDomainAdmin(hUser: Buffer, Domain: string): boolean;
    export function MD_GetPruningFlags(hUser: Buffer): MdPruningFlags;
    export function MD_GetSharedUserInfo(): MD_UserInfo;
    export function MD_GetUserInfo(hUser: Buffer): MD_UserInfo | undefined;
    export function MD_GroupClearCache(): void;
    export function MD_GroupExists(GroupName: string): boolean;
    export function MD_GroupGetCount(): number;
    export function MD_GroupInit(GroupName?: string): MD_Group;
    /**
     * 
     * @param Name name of existing domain
     * 
     * @returns {MD_Domain}
     */
    export function MD_InitDomainInfo(Name: string): MD_Domain;
    export function MD_InitListInfo(ListName: string): MD_List;
    /**
     * Create a blank MD_MessageInfo
     * 
     * @returns {MD_MessageInfo}
     */
    export function MD_InitMessageInfo(): MD_MessageInfo;
    export function MD_InitUserInfo(): MD_UserInfo;
    export function MD_LogonUser(Email: string, Password: string, IP?: string): boolean;
    export function MD_RegisterWindow(hWnd: Buffer): boolean;
    export function MD_ReloadUsers(): void;
    export function MD_RenameDomain(OldDomainName: string, NewDomainName: string): boolean;
    export function MD_SendInstantMessage(MessageInfo: MD_MessageInfo): number;
    /**
     * @summary Set a user's right to modify the global address book (GAB).
     * 
     * @param hUser User handle to update.
     * @param Value new value of can-modify-gab flag.
     * 
     * @deprecated
     */
    export function MD_SetCanModifyGAB(hUser: Buffer, Value: boolean): void;
    export function MD_SetIsDomainAdmin(hUser: Buffer, Domain: string, Value: boolean): void;
    /**
     * @summary Spool a message in the raw queue.
     * 
     * @param MessageInfo message to spool in raw queue.
     * 
     * @return {MdSpoolMessageResult} NOERROR means success.
     * 
     * @see MD_InitMessageInfo
     */
    export function MD_SpoolMessage(MessageInfo: MD_MessageInfo): MdSpoolMessageResult;
    export function MD_UnregisterWindow(hWnd: Buffer): boolean;
    export function MD_UpdateSuppressList(Domain: MD_Domain, Email: string, Flag: 0 | 1): MD_Domain | undefined;
    /**
     * Get the total number of mailboxes managed by MDaemon in all domains.
     * 
     * @returns {number}
     */
    export function MD_UserCount(): number;
    export function MD_UserExists(address: string): boolean;
    export function MD_UserLicenseFull(): boolean;
    export function MD_ValidateUser(hUser: Buffer, Password: string): boolean;
    export function MD_VerifyDomainInfo(Domain: MD_Domain): MdVerifyDomainInfoResult;
    export function MD_VerifyMessageInfo(MessageInfo: MD_MessageInfo): MdVerifyMessageInfoResult;
    export function MD_VerifyUserInfo(UserInfo: MD_UserInfo, Level?: MdVerifyUserInfoLevel[]): MdVerifyUserInfoResult;
    export function MD_WriteDomain(Domain: MD_Domain): boolean;

}