/**
 * Type definitions for node-mdaemon-api 21.5.1-alpha.6
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
        fileName: string;
        isPrerelease: boolean;
        isFreeVersion: boolean;
        name: string;
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
    export interface UserListItem {
        Email: string;
        FullName: string;
    }

    export interface GroupListItem {
        Description: string;
        GroupName: string;
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
     * @param email e-mail address
     * @param password password
     * @param ip OPTIONAL IP address
     * @see MD_LogonUser
     */
    export function loginSync(
        email: string,
        password: string,
        ip?: string
    ): boolean;
    /**
     * @summary Authenticate against MDaemon user database.
     * 
     * @param email  e-mail address
     * @param password password
     * @param callback callback function called either on success, or on
     * failure. On failure, err contains the error and success is
     * undefined. On success, err is undefined and success is true.
     * @param ip OPTIONAL IP address
     */
    export function login(
        email: string,
        password: string,
        callback: (err: Error | null, success?: boolean) => void,
        ip?: string
    ): void;
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
    export function readUserGroupsSync(): GroupListItem[];
    /**
     * 
     * @param callback 
     */
    export function readUserGroups(callback: (err: Error | null, userGroups?: GroupListItem[]) => void): void;
    /**
     * 
     */
    export function readUserTemplatesSync(): string[];
    /**
     * 
     * @param callback 
     */
    export function readUserTemplates(callback: (err: Error | null, userTemplates?: string[]) => void): void;
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
     * are present in mdAppPath. Each key has a VersionInfo value that
     * contains version information of the corresponding *.exe or *.dll.
     * @readonly
     */
    export const versions: { [moduleName: string]: VersionInfo };
    /**
     * @summary true if MDaemon's version major.minor match module's.
     * @readonly
     */
    export const versionsMatch: boolean;

    // ----------------------------------------------------------------
    // MDaemon APIs
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
    export interface MD_Gateway {
        AUTHLogon: string;
        AUTHPassword: string;
        CacheDirty: boolean;
        ETRNHost: string;
        ETRNPort: string;
        Email: string;
        FWDAddress: string;
        FWDHost: string;
        FWDPort: string;
        FWDSendAs: string;
        Flags: number;
        GatewayName: string;
        IPList: string[];
        LDAPBaseEntry: string;
        LDAPHost: string;
        LDAPPort: string;
        LDAPRootDN: string;
        LDAPRootPass: string;
        LDAPSearchFilter: string;
        LDAPSearchScope: number;
        MBF: string;
        MailDir: string;
        MaxDiskSpace: string;
        MaxMessageCount: string;
        Password: string;
        SendWarningFrom: string;
        SendWarningTo: string;
        SharedSecret: string;
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
        MaxDeletedIMAPMessageAge?: number;
        MaxInactive?: number;
        MaxMessageAge?: number;
        RecurseIMAP?: boolean;
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
    /**
     * MDaemon uses only a subset of folder classes.
     * 
     * See https://docs.microsoft.com/en-us/openspecs/exchange_server_protocols/ms-oxosfld/68a85898-84fe-43c4-b166-4711c13cdd61
     */
    export type MdFolderClass =
        'IPF.Appointment' | /* Calendar */
        'IPF.Contact' | /* Contacts */
        'IPF.Document' | /* Documents */
        'IPF.StickyNote' | /* Notes */
        'IPF.Task' /* Tasks */;

    // -----------------------------------------------------------------
    // --- Alias APIs
    // -----------------------------------------------------------------

    export function MD_CreateAlias(Email: string, Alias: string): boolean;
    export function MD_DeleteAlias(Alias: string, Email: string): boolean;
    export function MD_DeleteAllAliases(Email: string): boolean;
    export function MD_InvalidateAliases(): void;
    export function MD_IsValidAlias(Alias: string): boolean;
    /**
     * Undocumented.
     * 
     * @param Alias Alias to translate.
     * @param Level Depth (0, -1, -2, -3, ...); default -1
     * @returns Either the Level-th translation, or the input.
     */
    export function MD_TranslateAlias(Alias: string, Level?: number): string;


    // -----------------------------------------------------------------
    // --- Application level APIs
    // -----------------------------------------------------------------

    /**
     * Undocumented
     */
    export function MD_ClearSettingsCache(UnknownInt: number): string;
    export function MD_CreateFileName(RootPath: string, Importance: number, Prefix: string, Extension: string): string | undefined;
    /**
     * UNDOCUMENTED
     * 
     * @param Filename name of CSV export file
     * @param UnkownFlag OPTIONAL default false
     */
    export function MD_ExportAllUsers(Filename: string, UnkownFlag?: boolean): void;
    export function MD_GetAppDir(): string;
    /**
     * Undocumented
     */
    export function MD_GetLicensesUsed(): number;
    export function MD_GetSharedUserInfo(): MD_UserInfo;
    /**
     * Undocumented
     */
    export function MD_InvalidateBadPasswords(): void;
    /**
     * Undocumented
     */
    export function MD_InvalidateLANIPs(): void;
    /**
     * Undocumented
     */
    export function MD_IsAVLicenseTooSmall(UserCount: number): boolean;
    /**
     * Undocumented
     */
    export function MD_IsProVersion(): boolean;
    /**
     * Undocumented
     */
    export function MD_IsTrialVersion(): boolean;
    /**
    * Undocumented
    */
    export function MD_IsLicenseActive(): boolean;
    export function MD_RegisterWindow(hWnd: Buffer): boolean;
    export function MD_ReloadUsers(): void;
    export function MD_UnregisterWindow(hWnd: Buffer): boolean;
    /**
     * @summary Get the total number of mailboxes managed by MDaemon in
     * all domains.
     * 
     * @returns {number}
     */
    export function MD_UserCount(): number;
    /**
     * @summary Undocumented
     */
    export function MD_UserLicenseFull(): boolean;


    // -----------------------------------------------------------------
    // --- AppPassword APIs
    // -----------------------------------------------------------------

    export function MD_AppPasswordGetCount(hUser: Buffer): number | undefined;


    // -----------------------------------------------------------------
    // --- Authentication APIs
    // -----------------------------------------------------------------

    /**
     * Authenticate a user (by e-mail)
     * 
     * @param Email full e-mail address
     * @param Password secret
     * @param IP optional origin
     * @returns true on successfull authentication; false otherwise
     */
    export function MD_LogonUser(Email: string, Password: string, IP?: string): boolean;
    /**
     * Verify a user exists.
     * 
     * @param address full e-mail address
     * @returns true if address exists; false otherwise
     */
    export function MD_UserExists(address: string): boolean;
    export function MD_ValidateUser(
        hUser: Buffer,
        Password: string
    ): boolean;
    export function MD_VerifyUserInfo(
        UserInfo: MD_UserInfo,
        Level?: MdVerifyUserInfoLevel[]
    ): MdVerifyUserInfoResult;

    // -----------------------------------------------------------------
    // --- Calendar APIs
    // -----------------------------------------------------------------

    export function MD_CalGetDefaultFolder(hUser: Buffer): string;


    // -----------------------------------------------------------------
    // --- Clustering APIs
    // -----------------------------------------------------------------

    export function MD_ClusterGetEnabled(): boolean;
    export function MD_ClusterGetLocalNodeId(): number;
    export function MD_ClusterGetLocalServerGUID(): string | undefined;
    export function MD_ClusterGetLocalServerId(): number;
    export function MD_ClusterGetNodeId(ComputerName: string): number;
    export function MD_ClusterGetPrimaryComputerName(): string;
    export function MD_ClusterGetServerGUID(ComputerName: string): string | undefined;
    export function MD_ClusterGetServerId(ComputerName: string): number;
    export function MD_ClusterLocalNodeIsPrimary(): boolean;

    // -----------------------------------------------------------------
    // --- Contacts APIs
    // -----------------------------------------------------------------

    export function MD_ContactGetDefaultFolder(hUser: Buffer): string;

    // -----------------------------------------------------------------
    // --- Document APIs
    // -----------------------------------------------------------------

    export function MD_DocumentDeleteDocument(Path: string, Id: number, Requester?: string): boolean;
    export function MD_DocumentFreeItem(hDocument: Buffer): void;
    export function MD_DocumentGetDefaultFolder(hUser: Buffer): string;
    export function MD_DocumentGetFileName(hDocument: Buffer): string;
    export function MD_DocumentGetFileSize(hDocument: Buffer): BigInt;
    export function MD_DocumentGetId(hDocument: Buffer): number;
    export function MD_DocumentGetItem(Id: number, Path: string, Requester?: string): Buffer | undefined;
    export function MD_DocumentGetModifiedBy(hDocument: Buffer): string;
    export function MD_DocumentGetModifiedTime(hDocument: Buffer): Date;
    export interface MdDocumentCopyDocumentOptions {
        MoveInsteadOfCopy?: boolean;
        OverwriteExisting?: boolean;
        Requester?: string;
    }
    export function MD_DocumentCopyDocument(
        SrcPath: string,
        Id: number,
        DestPath: string,
        Options?: MdDocumentCopyDocumentOptions
    ): boolean;
    export interface MdDocumentCopyFileIntoFolderOptions {
        OverwriteExisting?: boolean;
        Requester?: string;
    }
    export function MD_DocumentCopyFileIntoFolder(
        InputFile: string,
        DestPath: string,
        NewFileName: string,
        ModifiedBy: string,
        Options?: MdDocumentCopyFileIntoFolderOptions
    ): boolean;
    export function MD_DocumentRenameDocument(
        Path: string,
        Id: number,
        NewFileName: string,
        Requester?: string
    ): boolean;

    // -----------------------------------------------------------------
    // --- Domain APIs
    // -----------------------------------------------------------------

    export function MD_DeleteDomain(DomainName: string): void;
    export function MD_GetDomainCount(): number;
    export function MD_GetDomainNameUsingIP(IP?: string): string;
    export function MD_GetDomainNames(): string[];
    export function MD_GetDomainsGAB(Domain: string): string;
    export function MD_GetSharedDomainInfo(): MD_Domain;
    /**
     * 
     * @param Name name of existing domain
     * 
     * @returns {MD_Domain}
     */
    export function MD_InitDomainInfo(DomainName: string): MD_Domain;
    export function MD_RenameDomain(OldDomainName: string, NewDomainName: string): boolean;
    export function MD_UpdateSuppressList(Domain: MD_Domain, Email: string, Flag: 0 | 1): MD_Domain | undefined;
    export function MD_VerifyDomainInfo(Domain: MD_Domain): MdVerifyDomainInfoResult;
    export function MD_WriteDomain(Domain: MD_Domain): boolean;


    // -----------------------------------------------------------------
    // --- Gateway APIs
    // -----------------------------------------------------------------

    export function MD_DeleteGateway(GatewayName: string, RemoveDir: boolean): void;
    export function MD_GetGatewayNames(): string[];
    export function MD_GatewayLicenseFull(): boolean;
    export function MD_GetGatewayCount(): number;
    export function MD_InitGatewayInfo(GatewayName: string): MD_Gateway;


    // -----------------------------------------------------------------
    // --- Group APIs
    // -----------------------------------------------------------------

    export function MD_GroupAddMember(Email: string, GroupName: string): boolean;
    export function MD_GroupClearCache(): void;
    export function MD_GroupCreate(Group: MD_Group): boolean;
    export function MD_GroupDelete(GroupName: string): boolean;
    export function MD_GroupExists(GroupName: string): boolean;
    export function MD_GroupFindMember(Email: string, GroupName: string): boolean;
    export function MD_GroupGetADGroup(ADGroupName: string): MD_Group | undefined;
    export function MD_GroupGetAll(): string[];
    export function MD_GroupGetAllWithDesc(): GroupListItem[];
    export function MD_GroupGetCount(): number;
    export function MD_GroupGetMembers(GroupName: string): string[];
    export function MD_GroupGetUserGroups(hUser: Buffer): string[];
    export function MD_GroupInit(GroupName?: string): MD_Group;
    export function MD_GroupRemoveMember(Email: string, GroupName: string): boolean;
    export function MD_GroupRename(GroupName: string, NewName: string): boolean;
    export function MD_GroupRenameMember(OldEmail: string, NewEmail: string): void;
    export function MD_GroupUpdate(OldGroup: MD_Group, NewGroup: MD_Group): boolean;
    export function MD_GroupWrite(Group: MD_Group): boolean;


    // -----------------------------------------------------------------
    // --- List APIs
    // -----------------------------------------------------------------

    export function MD_ClearListSettingsCache(ListName?: string): void;
    export function MD_DeleteList(ListName: string): void;
    export function MD_InitListInfo(ListName: string): MD_List;
    export function MD_ListExists(ListName: string): boolean;
    export function MD_ListGetCount(): number;
    export function MD_ListGetNames(): string[];


    // -----------------------------------------------------------------
    // --- Message APIs
    // -----------------------------------------------------------------

    /**
     * @summary Create a blank {MD_MessageInfo} object.
     * 
     * @returns {MD_MessageInfo}
     */
    export function MD_InitMessageInfo(): MD_MessageInfo;
    /**
     * @summary Post an instant message.
     * 
     * @param MessageInfo 
     */
    export function MD_SendInstantMessage(
        MessageInfo: MD_MessageInfo
    ): number;
    /**
     * @summary Spool a message in the raw queue.
     * 
     * @param MessageInfo message to spool in raw queue.
     * 
     * @return {MdSpoolMessageResult} NOERROR means success.
     * 
     * @see MD_InitMessageInfo
     */
    export function MD_SpoolMessage(
        MessageInfo: MD_MessageInfo
    ): MdSpoolMessageResult;
    /**
     * @summary Check a MD_MessageInfo object for invalid data.
     * 
     * @param MessageInfo message to validate
     */
    export function MD_VerifyMessageInfo(
        MessageInfo: MD_MessageInfo
    ): MdVerifyMessageInfoResult;


    // -----------------------------------------------------------------
    // --- Note APIs
    // -----------------------------------------------------------------

    export function MD_NoteGetDefaultFolder(hUser: Buffer): string;


    // -----------------------------------------------------------------
    // --- Task APIs
    // -----------------------------------------------------------------

    export function MD_TaskGetDefaultFolder(hUser: Buffer): string;


    // -----------------------------------------------------------------
    // --- User APIs
    // -----------------------------------------------------------------

    /**
     * Undocumented
     * 
     * @param hUser buffer containing a user's handle
     * @param Password password to check
     */
    export function MD_CompromisedPasswordCheck(
        hUser: Buffer,
        Password: string
    ): boolean;
    /**
     * Undocumented
     * 
     * @param hUser 
     * @param Path 
     * @param FolderClass 
     * @param UnknownFlag 
     */
    export function MD_CreateUserIMAPFolder(
        hUser: Buffer,
        Path: string,
        FolderClass?: MdFolderClass | null,
        UnknownFlag?: boolean): boolean;
    /**
     * Options for MD_DeleteUser.
     */
    export interface MdDeleteUserOptions {
        DALIASDB: boolean;
        DDELETEALL: boolean; // shortcut for all flags set to true
        DFWDDB: boolean;
        DMAILFORMATDB: boolean;
        DMULTIPOPDB: boolean;
        DREMOVEDIR: boolean;
        DUSERLISTDB: boolean;
    }
    /**
     * Delete a user by e-mail address.
     * 
     * @param Email e-mail address of user to delete
     * @param Options what to erase; see {MdDeleteUserOptions} 
     */
    export function MD_DeleteUser(
        Email: string,
        Options: number | MdDeleteUserOptions
    ): boolean;
    /**
     * Undocumented
     * 
     * @param hUser buffer containing a user's handle
     */
    export function MD_EraseAutoResp(hUser: Buffer): boolean;
    /**
    * Undocumented
    */
    export function MD_FlagReloadUsers(): void;
    export function MD_GetAllowChangeViaEmail(hUser: Buffer): boolean;
    export function MD_GetAllowPOPAccess(hUser: Buffer): boolean;
    export function MD_GetAllowTFA(hUser: Buffer): boolean;
    export function MD_GetApplyDomainSignature(hUser: Buffer): boolean;
    export function MD_GetApplyQuotas(hUser: Buffer): boolean;
    export function MD_GetAttachmentLinking(hUser: Buffer): boolean;
    export function MD_GetAutoDecode(hUser: Buffer): boolean;
    export function MD_GetAutoRespInfo(hUser: Buffer): MD_AutoResponder;
    export function MD_GetByAlias(): Buffer | undefined;
    export function MD_GetByEmail(Email: string): Buffer | undefined;
    export function MD_GetByFullName(FullName: string, Domain: string): Buffer | undefined;
    export function MD_GetByMailDir(MailDir: string, Domain: string): Buffer | undefined;
    export function MD_GetByMailbox(Mailbox: string, Domain: string): Buffer | undefined;
    export function MD_GetComments(hUser: Buffer): string;
    export function MD_GetDBPath(db: MdDatabase): string;
    export function MD_GetDirSize(hUser: Buffer): number;
    export function MD_GetDoNotDisturb(hUser: Buffer): boolean;
    export function MD_GetDontExpirePassword(hUser: Buffer): boolean;
    export function MD_GetEnableComAgent(hUser: Buffer): boolean;
    export function MD_GetEnableInstantMessaging(hUser: Buffer): boolean;
    export function MD_GetExemptFromAuthMatch(hUser: Buffer): boolean;
    export function MD_GetFileCount(hUser: Buffer): number | undefined;
    export function MD_GetForwardingInfo(hUser: Buffer): MD_Forwarding;
    export function MD_GetFree(hUser: Buffer): void;
    export function MD_GetFullName(hUser: Buffer): string;
    export function MD_GetHideFromEveryone(hUser: Buffer): boolean;
    export function MD_GetIsAdmin(hUser: Buffer): boolean;
    export function MD_GetIsDisabled(hUser: Buffer): boolean;
    export function MD_GetIsDomainAdmin(hUser: Buffer, Domain: string): boolean;
    export function MD_GetIsForwarding(hUser: Buffer): boolean;
    export function MD_GetIsFrozen(hUser: Buffer): boolean;
    export function MD_GetKeepForwardedMail(hUser: Buffer): boolean;
    export function MD_GetMailbox(hUser: Buffer): string;
    export function MD_GetMaxDiskSpace(hUser: Buffer): number;
    export function MD_GetMaxMessageCount(hUser: Buffer): number;
    export function MD_GetMustChangePassword(hUser: Buffer): boolean;
    export function MD_GetPassword(hUser: Buffer): string;
    export function MD_GetPasswordCreateDate(hUser: Buffer): Date;
    export function MD_GetProcessCalendarRequests(hUser: Buffer): boolean;
    export function MD_GetPruningFlags(hUser: Buffer): MdPruningFlags;
    export function MD_GetRequireTFA(hUser: Buffer): boolean;
    export function MD_GetSignatureFile(hUser: Buffer): string | undefined;
    export function MD_GetSubAddressing(hUser: Buffer): boolean;
    /**
     * Undocumented
     * 
     * @param hUser buffer containing a user's handle
     * @param IMAPFolderPath OPTIONAL default is "INBOX"
     */
    export function MD_GetUserIMAPFolderPath(
        hUser: Buffer,
        IMAPFolderPath: string): string;
    export function MD_GetUserInfo(hUser: Buffer): MD_UserInfo | undefined;
    export function MD_InitUserInfo(): MD_UserInfo;
    /**
     * Undocumented
     * 
     * @param hUser buffer containing a user's handle
     */
    export function MD_IsPasswordTooOld(hUser: Buffer): boolean;
    export function MD_RenameUserFolder(
        OldPath: string,
        NewPath: string,
        UserEmail: string,
        UserMailRoot: string
    ): boolean;
    /**
     * Undocumented
     * 
     * @param hUser buffer containing a user's handle
     * @param OldIMAPPath 
     * @param NewIMAPPath 
     */
    export function MD_RenameUserIMAPFolder(
        hUser: Buffer,
        OldIMAPPath: string,
        NewIMAPPath: string,

    ): boolean;
    /**
     * Undocumented
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
     export function MD_SetAllowChangeViaEmail(hUser: Buffer, Value?: boolean): boolean;
    /**
     * Undocumented
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetAttachmentLinking(hUser: Buffer, Value?: boolean): boolean;
    /**
     * Undocumented
     * 
     * @param hUser buffer containing a user's handle
     * @param Domain domain name
     * @param Value true | false
     */
    export function MD_SetIsDomainAdmin(hUser: Buffer, Domain: string, Value: boolean): void;
    /**
     * Undocumented
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetIsFrozen(hUser: Buffer, Value?: boolean): boolean;
    /**
     * Undocumented
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default 0
     */
     export function MD_SetMaxDiskSpace(hUser: Buffer, Value?: Number): boolean;
    /**
     * Undocumented
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetMustChangePassword(hUser: Buffer, Value?: boolean): boolean;
    export function MD_SetPassword(hUser: Buffer, Password: string): void;
    /**
     * Undocumented
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
     export function MD_SetProcessCalendarRequests(hUser: Buffer, Value?: boolean): boolean;
    /**
     * Undocumented
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
     export function MD_SetRequireTFA(hUser: Buffer, Value?: boolean): boolean;)
    /**
     * Undocumented
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetSubAddressing(hUser: Buffer, Value?: boolean): boolean;
    export function MD_SetUseDefaultPruning(hUser: Buffer, Value?: boolean): boolean;
    export function MD_VerifyAccountDB(): boolean;


    // -----------------------------------------------------------------
    // --- User template APIs
    // -----------------------------------------------------------------

    export function MD_TemplateDelete(TemplateName: string): boolean;
    export function MD_TemplateExists(TemplateName: string): boolean;
    export function MD_TemplateGetAll(): string[];
    export function MD_TemplateGetFlags(TemplateName: string): number;
    export function MD_TemplateSetFlags(TemplateName: string, Flags: number): boolean;


    // -----------------------------------------------------------------
    // --- WorldClient APIs
    // -----------------------------------------------------------------

    /**
     * Undocumented
     * 
     * @param Key 
     * @param UserDomain 
     * @param UserMailDir 
     */
    export function MD_GetWorldClientUserString(
        Key: string,
        UserDomain: string,
        UserMailDir: string
    ): string;
    /**
     * Undocumented
     * 
     * @param Key 
     * @param UserMailDir 
     * @param Buffer 
     */
    export function MD_SetWorldClientUserString(
        Key: string,
        UserMailDir: string,
        Buffer: string
    ): void;

}