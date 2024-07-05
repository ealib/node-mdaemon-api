/**
 * Type definitions for node-mdaemon-api 24.0.1-alpha.33
 * Project: Unofficial Node.js binding for MDaemon APIs
 * Definitions by: MTKA https://mtka.eu/
 * 
 * @module node-mdaemon-api
 */

declare module "node-mdaemon-api" {

    //#region module types

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

    export interface MdApiResultBase {
        ErrorCode?: number;
        ErrorMessage?: string;
        Succeeded: boolean;
    }

    export interface MdApiResult<TData> extends MdApiResultBase {
        Data?: TData;
    }

    export type MdCalResultSimple = MdApiResultBase;
    export type MdCalResult<T> = MdApiResult<T>;

    export interface MdDocumentInfo {
        description: string;
        id: number;
        fileName: string;
        fileSize: number;
        modifiedBy: string;
        modifiedTime: string;
        path: string;
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

    /**
     * @see {@link https://help.mdaemon.com/mdaemon/en/semaphore_files.html} for further information.
     */
    export interface MdSemaphores {
        /** Display alert pop-up to WC users */
        alert(message: string): boolean;
        /** Clear the cached quota value for a user. Use '*' for all. */
        clearQuotaCounts(address?: string): boolean;
        /** Create WATCHDOG.SEM */
        createWatchdog(): boolean;
        /** Delete a user */
        delUser(address: string): boolean;
        /** Create UPDATEAV.SEM */
        initiateAntivirusDefinitionUpdate(): boolean;
        /** Create PROCBAD.SEM */
        initiateBadQueueDelivery(): boolean;
        /** Create PROCHOLDING.SEM */
        initiateHoldingQueueProcessing(): boolean;
        /** Create PROCDIG.SEM */
        initiateListDigests(): boolean;
        /** Create PROCNOW.SEM */
        initiateRemoteMailCheckAndDelivery(): boolean;
        /** Create PROCREM.SEM */
        initiateRemoteQueueProcessing(): boolean;
        /** Create PROCRETR.SEM */
        initiateRetryQueueProcessing(): boolean;
        /** Create UPDATESA.SEM */
        initiateSpamFilterUpdate(): boolean;
        /** Create LOCKSEMS.SEM */
        lockProcessing(): boolean;
        /** Create TRAY.SEM */
        redrawTrayIcon(): boolean;
        /** Create GROUPS.SEM */
        reloadAccountGroupsConfig(): boolean;
        /** Create ACTIVESYNCUSERS.SEM */
        reloadActiveSyncUsersConfig(): boolean;
        /** Create ALIAS.SEM */
        reloadAliasConfig(): boolean;
        /** Create RELOADCACHE.SEM */
        reloadAllCachedConfig(): boolean;
        /** Create ARCHIVE.SEM */
        reloadArchivingWhiteListConfig(): boolean;
        /** Create ATTACHMENTLINKING.SEM */
        reloadAttachmentLinkingConfig(): boolean;
        /** Create PRUNE.SEM */
        reloadAutoPruningConfig(): boolean;
        /** Create AUTORESPATTACHMENTS.SEM */
        reloadAutoresponderApprovedAttachmentsConfig(): boolean;
        /** Create AUTORESPEXCEPT.SEM */
        reloadAutoresponderExceptionConfig(): boolean;
        /** Create BADPASSWORD.SEM */
        reloadBadPasswordConfig(): boolean;
        /** Create BATV.SEM */
        reloadBatvConfig(): boolean;
        /** Create SUPPRESS.SEM */
        reloadBlackListConfigAndClearCachedDomainConfig(): boolean;
        /** Create CATLIST.SEM */
        reloadCatalogsConfig(): boolean;
        /** Create COLORS.SEM */
        reloadColorizedLogsConfig(): boolean;
        /** Create CFILTER.SEM */
        reloadContentFilterConfig(): boolean;
        /** Create CREDSMATCHWHITELIST.SEM */
        reloadCredentialsMatchWhiteList(): boolean;
        /** Create NODNSBL.SEM */
        reloadDNSBLWhiteListConfig(): boolean;
        /** Create DMARCCACHE.SEM */
        reloadDmarcCache(): boolean;
        /** Create DMARC.SEM */
        reloadDmarcConfig(): boolean;
        /** Create DMARCWHITELIST.SEM */
        reloadDmarcWhiteList(): boolean;
        /** Create DNS.SEM */
        reloadDnsConfig(): boolean;
        /** Create DOMAINSHARING.SEM */
        reloadDomainSharingConfig(): boolean;
        /** Create DOMAINS.SEM */
        reloadDomainsConfig(): boolean;
        /** Create GATEWAYS.SEM */
        reloadGatewaysConfig(): boolean;
        /** Create GREYLIST.SEM */
        reloadGreylistingConfig(): boolean;
        /** Create TRANSLAT.SEM */
        reloadHeaderTranslationConfig(): boolean;
        /** Create HOSTSCREEN.SEM */
        reloadHostScreenConfig(): boolean;
        /** Create IPSCREEN.SEM */
        reloadIPScreenConfig(): boolean;
        /** Create IPSHIELD.SEM */
        reloadIPShieldConfig(): boolean;
        /** Create INACTIVEEXCLUDE.SEM */
        reloadInactiveAccountExceptionConfig(): boolean;
        /** Create LANDOMAINS.SEM */
        reloadLanDomainsConfig(): boolean;
        /** Create LANIPS.SEM */
        reloadLanIPsConfig(): boolean;
        /** Create LDAPCACHE.SEM */
        reloadLdapAndGatewayUserConfig(): boolean;
        /** Create LOGSETTINGS.SEM */
        reloadLoggingConfig(): boolean;
        /** Create GRPLIST.SEM */
        reloadMailingListsConfig(): boolean;
        /** Create MXCACHE.SEM */
        reloadMxCache(): boolean;
        /** Create NOPRIORITY.SEM */
        reloadNoPriorityConfig(): boolean;
        /** Create PRIORITY.SEM */
        reloadPriorityMailConfig(): boolean;
        /** Create PUBLICSUFFIX.SEM */
        reloadPublicSuffixConfig(): boolean;
        /** Create REVERSEEXCEPT.SEM */
        reloadReverseLookupsExceptionConfig(): boolean;
        /** Create SCHEDULE.SEM */
        reloadScheduleConfig(): boolean;
        /** Create SMARTSPOOL.SEM */
        reloadSmartSpoolingWhiteListConfig(): boolean;
        /** Create SPAMBOT.SEM */
        reloadSpamBotDetectionConfig(): boolean;
        /** Create MDSPAMD.SEM */
        reloadSpamFilterWhiteListAndSpamd(): boolean;
        /** Create SPAMHONEYPOTS.SEM */
        reloadSpamHoneypotsConfig(): boolean;
        /** Create SPF.SEM */
        reloadSpfDkimVbrConfig(): boolean;
        /** Create NOSTARTTLS.SEM */
        reloadStartTLSWhiteListConfig(): boolean;
        /** Create REQUIRETLS.SEM */
        reloadStartTlsRequiredConfig(): boolean;
        /** Create TARPIT.SEM */
        reloadTarpitAndDynamicScreeningConfig(): boolean;
        /** Create TRUST.SEM */
        reloadTrustedDomainsAndAddresses(): boolean;
        /** Create USERLIST.SEM */
        reloadUserList(): boolean;
        /** Create RESTARTCF.SEM */
        restartContentFilter(): boolean;
        /** Create RESTART.SEM */
        restartMDaemon(): boolean;
        /** Create MINGER.SEM */
        restartMingerServer(): boolean;
        /** Create RESTARTWC.SEM */
        restartWorldClientServer(): boolean;
        /** Create ACLFIX.SEM */
        runAclFileCleanup(): boolean;
        /** Create EXITNOW.SEM */
        shutDownMDaemon(): boolean;
        /** Create BAYESLEARN.SEM */
        startBayesianLearning(): boolean;
        /** Erase LOCKSEMS.SEM */
        unlockProcessing(): boolean;
        /** Create DMARCUPDATE.SEM */
        updateDmarcPublicSuffixConfig(): boolean;
        /** Check if WATCHDOG.SEM exists. */
        watchdogExists(): boolean;
    }

    //#endregion

    //#region node-mdaemon-api own APIs

    /**
     * Predicate for domain names
     * 
     * @param domainName name of the domain to check
     */
    export function domainExistsSync(domainName: string): boolean;
    /**
     * Check asynchronously if a domain exists.
     * 
     * @param domainName name of the domain to check
     * @param callback callback function called either on success, or on
     * failure. On failure, err contains the error and success is
     * undefined. On success, err is undefined and success is true.
     */
    export function domainExists(
        domainName: string,
        callback: (err: Error | null, exists?: boolean
        ) => void): void;
    /**
     * @summary Check if a gateway exists
     * 
     * @param gatewayName name of the gateway to be checked,
     * e.g. 'gw.example.com'.
     */
    export function gatewayExistsSync(gatewayName: string): boolean;
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
     * @summary It retrieves all possible information about a document,
     * given the path where it is located and its local ID. Asynchronous
     * API.
     * 
     * @param Path the directory containing the document identified by ID
     * @param ID local identifier of the document
     * @param Callback 
     * @param Requester OPTIONAL
     */
    export function readDocumentInfo(
        Path: string,
        ID: number,
        Callback: (err: Error | null, documentInfo?: MdDocumentInfo) => void,
        Requester?: string): void;
    /**
     * @summary It retrieves all possible information about a document,
     * given the path where it is located and its local ID. Synchronous
     * API.
     * 
     * The callback is called with err !== null, on error. Otherwise
     * documentInfo contains the data about document ID.
     * 
     * @param Path the directory containing the document identified by ID
     * @param ID local identifier of the document
     * @param Requester OPTIONAL
     * 
     * @returns {MdDocumentInfo}
     */
    export function readDocumentInfoSync(
        Path: string,
        ID: number,
        Requester?: string): MdDocumentInfo | undefined;
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
     * Read a mailing list definition, if it exists.
     * 
     * @param listName full name of the list: example@example.com
     * @param callback async callback
     */
    export function readMailingList(listName: string, callback: (err: Error | null, listInfo?: MD_List) => void): void;
    /**
     * Read a mailing list definition, if it exists.
     * 
     * @param listName full name of the list: example@example.com
     */
    export function readMailingListSync(listName: string): MD_List | undefined;
    /**
     * Read a mailing list members, if the list exists.
     * 
     * @param listName full name of the list: example@example.com
     */
    export function readMailingListsSync(): string[];
    /**
     * Read a mailing list's members, if the very list exists.
     * 
     * @param listName full name of the list: example@example.com
     * @param includeQueries: OPTIONAL fill MD_ListMember.Flags
     */
    export function readMailingListMembersSync(
        listName: string,
        includeQueries?: boolean
    ): MD_ListMember[];
    /**
     * Read a mailing list's members, if the very list exists.
     * 
     * @param listName full name of the list: example@example.com
     * @param callback async callback
     * @param includeQueries: OPTIONAL fill MD_ListMember.Flags
     */
    export function readMailingListMembers(
        listName: string,
        callback: (err: Error | null, members?: MD_ListMember[]) => void,
        includeQueries?: boolean
    ): void;
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
     * Retrieve a user's role list.
     * Roles are 'user', 'admin', 'domainAdmin'.
     * 
     * @param email 
     * @param callback 
     */
    export function readUserRoles(email: string, callback: (err: Error | null, roles?: string[]) => void): void;
    /**
     * Retrieve a user's role list.
     * Roles are 'user', 'admin', 'domainAdmin'.
     * 
     * @param email 
     */
    export function readUserRolesSync(email: string): string[];
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
    /**
     * @summary Helpers to control MDaemon's SEM files.
     * @readonly
     */
    export const sem: MdSemaphores;

    //#endregion

    //#region MDaemon APIs

    //#region MDaemon API Types

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
    export interface MD_AppPassword {
        ID: string;
        Name: string;
        Hash: string;
        LastUsedIP: string;
        CreatedTime: Date;
        LastUsedTime: Date;
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
    export interface MdFlags {
        raw: number;
    }
    export interface MdGatewayFlags extends MdFlags {
        APPLYQUOTAS: boolean;
        ATRN: boolean;
        AUTH: boolean;
        AUTHALWAYSVALID: boolean;
        AUTOEXTRACT: boolean;
        AUTOSPOOL: boolean;
        ENABLEANTISPAM: boolean;
        ENABLEANTIVIRUS: boolean;
        ENABLED: boolean;
        ETRN: boolean;
        FILE: boolean;
        FWDTOADDR: boolean;
        FWDTOHOST: boolean;
        HONORIPS: boolean;
        IGNOREIPS: boolean;
        KEEPLOCALCOPY: boolean;
        LDAP: boolean;
        LOCKATRN: boolean;
        MINGER: boolean;
        REFERRALS: boolean;
        REQUIREAUTH: boolean;
        SENDWARNING: boolean;
        TREATASFOREIGN: boolean;
        USEANYHOST: boolean;
        USERETRYQ: boolean;
        USESPECIFICHOST: boolean;
        V3: boolean;
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
        Flags: MdGatewayFlags;
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
    export interface MdMultiPOPItemFlags extends MdFlags {
        ENABLED: boolean;
        REMOVEMAIL: boolean;
        USEAPOP: boolean;
        USEOAUTH: boolean;
    }
    export interface MD_MultiPOPItem {
        HostName: string;
        UserName: string;
        Password: string;
        Flags: MdMultiPOPItemFlags;
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
    export const enum MdMessagePriority {
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
        EnableAIMessageFeatures: boolean;
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
        'ACCOUNTTEMPLATESDB' |
        'ACLSHLOOKUPDB' |
        'ACTIVEDSDB' |
        'ADGROUPSDB' |
        'ALIASDB' |
        'ASSCHEDULEDB' |
        'ATTACHMENTLINKINGDB' |
        'AUTHDB' |
        'AUTORESPATTACHMENTSDB' |
        'AUTORESPEXCEPTDB' |
        'AVEXPIREDB' |  // deprecated
        'AVMESSAGEDB' | // deprecated
        'AVSCHEDULEDB' |
        'BADPASSWORDDB' |
        'BATVEXCEPTDB' |
        'BESPOLICYDB' | // deprecated
        'BISCONFIGDB' |
        'BISSERVERSDB' | // deprecated
        'BISSUBSCRIBEDB' |
        'CALENDARDB' |
        'CALREMINDDB' |
        'CENSORDB' |
        'CFADMDB' |
        'CFBOUNCEDB' |
        'CFCOMPRESSDB' |
        'CFDELFILESDB' |
        'CFDOMAINEXCDB' |
        'CFEXCLUDESDB' |
        'CFILTERDB' |
        'CFRECDB' |
        'CFRULESDB' |
        'CFRULESTATSDB' |
        'CFSAUPDATEDB' |
        'CFSNDDB' |
        'CFSYSRULESDB' |
        'CFVIRADMDB' |
        'CFVIRRECDB' |
        'CFVIRSNDDB' |
        'CFVIRUPDATEDB' |
        'CFVIRWRNDB' |
        'CREDSMATCHWHITELISTDB' |
        'DELERRDB' |  // deprecated
        'DELUNLESSDB' |
        'DELWARNDB' | // deprecated
        'DKSIGNLISTDB' |
        'DKVRFYEXCEPTDB' |
        'DMARCCACHEDB' |
        'DMARCWHITELISTDB' |
        'DNSBLDB' |
        'DOMAINDB' |
        'DOMAINPOPDB' |
        'DOMAINSHARINGDB' |
        'DPOPXTRADB' |
        'DSALLOWEDDOMAINSDB' |
        'DVUNLESSDB' |
        'DYNAMICSCREENDB' |
        'FROMMODWHITELISTDB' |
        'FWDDB' |
        'FWDUNLESSDB' |
        'GATEWAYDB' |
        'GREYLISTDB' |
        'GROUPSDB' |
        'GUARDIANDB' |
        'GUICOUNTSDB' |
        'GWUSERLISTDB' |
        'HELOLOOKUPWLDB' |
        'HELPDB' |
        'HIJACKWHITELISTDB' |
        'HOSTAUTHDB' |
        'HOSTSCREENDB' |
        'IPCACHEDB' |
        'IPSCREENDB' |
        'IPSHIELDDB' |
        'LANDOMAINSDB' |
        'LANIPSDB' |
        'LDAPCACHEDB' |
        'LDAPDB' |
        'LISTPRUNEDB' |
        'LOCALDATADB' |
        'LOCATIONSDB' | // deprecated
        'LOGCOLORSDB' |
        'MAILLOOKUPWLDB' |
        'MDAEMONINIDB' |
        'MDCAVDB' |
        'MDOPDB' |
        'MDPGPDB' |
        'MIMETYPEDB' |
        'MSGIDDB' |
        'MTEDB' |
        'MULTIPOPDB' |
        'MXCACHEDB' |
        'NEARQUOTADB' |
        'NOARCHIVEDB' |
        'NOATTACHMENTLINKINGDB' |
        'NOCACHEDB' |
        'NOCOMMANDDB' |
        'NODNSBLDB' |
        'NOGREYLISTDB' |
        'NOLOGFROMIPDB' |
        'NOPRIORITYDB' |
        'NOSMARTSPOOLDB' |
        'NOSPAMBOTDB' |
        'NOSTARTTLSDB' |
        'NOSUCHUSERDB' |
        'NOTARPITDB' | // deprecated
        'OAUTHDB' |
        'OCSETTINGSDB' |
        'OVERQUOTADB' |
        'PFDATADB' |
        'PLUGINSDB' |
        'POLICYDB' |
        'POPLOCKDB' |
        'PRIORITYDB' |
        'PUBLICSUFFIXDB' |
        'PWEXPIREWARNINGDB' |
        'QCOUNTSDB' |
        'QUEUEDUPDATESDB' |
        'QUOTACOUNTSDB' |// deprecated
        'RCPTBLACKLISTDB' |
        'RECALLDB' |
        'RECEIPTDB' |
        'RECENTDB' |
        'RELAYDB' | // deprecated
        'REMINDERSDB' |
        'REQUIRESTARTTLSDB' |
        'REQUIRETLSWLDB' |
        'REVERSEEXCEPTDB' |
        'RFC822TMPDB' |
        'SCHEDULEDB' |
        'SECUREPASSWORDSDB' |
        'SENDERBLACKLISTDB' |
        'SPAMBOTIPDB' |
        'SPAMBOTSENDERDB' |
        'SPAMHONEYPOTSDB' |
        'SPFCACHEDB' |
        'SPFDKAPPROVEDDB' |
        'SPFEXCEPTDB' |
        'TARPITCONNECTDB' |
        'TASKREMINDDB' |
        'TFAEXCEPTIONIPSDB' |
        'TRANSEXCPTDB' |
        'TRANSLATEDB' |
        'TRUSTEDHOSTSDB' |
        'TRUSTEDIPSDB' |
        'UNSUBUSERDB' |
        'USERLISTDB' |
        'USERSDELETEDTODAYDB' |
        'VARIABLEDB' | // deprecated
        'VBRDB' |
        'WEBACCESSDB' | // deprecated
        'WORLDCLIENTDOMAINDB' |
        'WORLDCLIENTINIDB';
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
    export const enum MdSpoolMessageResult {
        NOERROR = 0,
        MISSINGRAWPATH = 1,
        CANTGENRAWFILENAME = 2,
        CANTLOCKRAWFILE = 3,
        CANTCREATERAWFILE = 4,
        CANTACCESSBODYFILE = 5,
    }
    export const enum MdVerifyMessageInfoResult {
        NOERROR = 0,
        MISSINGTO = 1,
        MISSINGFROM = 2,
        MISSINGBODY = 3,
        MISSINGBODYFILE = 4,
        MISSINGATTACHMENTFILE = 5,
    }
    export const enum MdVerifyDomainInfoResult {
        NOERROR = 0,
        NODOMAINNAME = 1,
        INVALIDDOMAINNAME = 2,
    }
    export const enum MdVerifyUserInfoResult {
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

    export interface MD_MeetingAttendee {
        Email: string;
        Response: number;
        SendInvite: boolean;
        SentInvite: boolean;
        Type: number;
    }
    export interface MD_Reminder {
        Id: number;
        Owner: string;
        Path: string;
        SendEmail: boolean;
        Time: Date;
        Type: number;
        Uuid: string;
    }

    export interface MD_OccurrenceChange {
        NewBusyStatus: number;
        NewCategories: string;
        NewComment: string;
        NewCommentHtml: string;
        NewEnd: Date;
        NewIsReminderSet: boolean;
        NewLocation: string;
        NewReminderMinutes: number;
        NewStart: Date;
        NewSubject: string;
        OriginalDate: Date;
    }
    export interface MD_TimeZone {
        Bias: number;
        DaylightBias: number;
        DaylightDate: Date;
        StandardDate: Date;
    }
    export interface MD_RecurrencePattern {
        ChangedOccurrences: MD_OccurrenceChange[];
        DayOfMonth: number;
        DayOfWeekMask: number;
        DeletedOccurrences: Date[];
        End: Date;
        Instance: number;
        Interval: number;
        MonthOfYear: number;
        Occurrences: number;
        Start: Date;
        SubType: number;
        TimeZone?: MD_TimeZone;
        Type: number;
        ui: number;
    }
    export interface MD_PIMAttachment {
        Data: Blob | null;
        Filename: string;
        LocalFilePath: string;
        MimeType: string;
        Type: number;
    }
    export interface MD_ContactPublicKey {
        Key: string; // The Key must always be in PEM format which is BASE64 encoded
    }
    export interface MD_ContactGroupItem {
        Email: string;
        FullName: string;
        Guid: string;
    }
    export interface MD_CalItem {
        AdditionalReminderCount: number;
        AdditionalReminders: number[]; // in minutes
        AttachmentCount: number;
        Attachments: MD_PIMAttachment[];
        AttendeeCount: number;
        Attendees: MD_MeetingAttendee[];
        BusyStatus: number;
        Categories: string[];
        CodePage: number;
        Comment: string;
        CommentHtml: string;
        Creator: string;
        DAVDataFile: string;
        EventEnd: Date;
        EventStart: Date;
        Flags: number;
        Id: number;
        IntendedBusyStatus: number;
        IsAllDay: boolean;
        IsAppointmentLocation: boolean;
        IsPrivate: boolean;
        IsReadOnly: boolean;
        IsRecurring: boolean;
        IsReminderSet: boolean;
        IsTentativePlaceholder: boolean;
        Label: number;
        Location: string;
        Method: number;
        ModifiedTime: Date;
        Planner: string;
        Priority: number;
        Recurrence: MD_RecurrencePattern;
        ReminderMinutes: number;
        Sequence: number;
        Subject: string;
        TNEFFile: string;
        iCalUid: string;
    }
    export interface MdContactItemFlags extends MdFlags {

    }
    export interface MD_ContactItem {
        AccountName: string;
        Anniversary: Date;
        AttachmentCount: number;
        Attachments: MD_PIMAttachment[];
        BBPIN: string;
        Birthday: Date;
        BusAddress: string;
        BusAssistant: string;
        BusAssistantPhone: string;
        BusCity: string;
        BusCompany: string;
        BusCountry: string;
        BusDepartment: string;
        BusFax: string;
        BusIPPhone: string;
        BusMainPhone: string;
        BusManager: string;
        BusOffice: string;
        BusPager: string;
        BusPhone2: string;
        BusPhone: string;
        BusRadio: string;
        BusState: string;
        BusTitle: string;
        BusWebAddress: string;
        BusZipCode: string;
        CarPhoneNumber: string;
        Categories: string;
        Children: string;
        CodePage: number;
        Comment: string;
        CommentHtml: string;
        ContactType: number;
        CustomerId: string;
        DAVDataFile: string;
        EmailAddress2: string;
        EmailAddress3: string;
        EmailAddress: string;
        FileAs: string;
        FirstName: string;
        Flags: MdContactItemFlags;
        FolderID: number;
        FullName: string;
        GovernmentId: string;
        GroupItemCount: number;
        GroupItems: MD_ContactGroupItem[];
        Guid: string;
        HomeAddress: string;
        HomeCity: string;
        HomeCountry: string;
        HomeFax: string;
        HomeMobile: string;
        HomePhone2: string;
        HomePhone: string;
        HomeState: string;
        HomeWebAddress: string;
        HomeZipCode: string;
        IMAddress2: string;
        IMAddress3: string;
        IMAddress: string;
        ImapUID: number;
        IsGroup: boolean;
        IsReadOnly: boolean;
        LastName: string;
        MMSAddress: string;
        MiddleName: string;
        Mobile2: string;
        ModifiedTime: Date;
        NickName: string;
        OtherAddress: string;
        OtherCity: string;
        OtherCountry: string;
        OtherPhone: string;
        OtherState: string;
        OtherZipCode: string;
        Picture: string;
        PublicKeys: MD_ContactPublicKey[];
        PublicKeysCount: number;
        Revision: number;
        Spouse: string;
        Suffix: string;
        TNEFFile: string;
        Title: string;
        YomiCompanyName: string;
        YomiFirstName: string;
        YomiLastName: string;
        vCardUid: string;
    }
    export interface MdNoteItemFlags extends MdFlags {

    }
    export interface MD_NoteItem {
        AttachmentCount: number;
        Attachments: MD_PIMAttachment[];
        Body: string;
        BodyHtml: string;
        Categories: string[];
        CodePage: number;
        Color: number; // 0=blue;1=green;2=pink;3=yellow;4=white
        Contacts: string[];
        Creator: string;
        DateCreated: Date;
        Flags: MdNoteItemFlags;
        Height: number;
        Id: number;
        IsPrivate: boolean;
        IsReadOnly: boolean;
        Left: number;
        ModifiedTime: Date;
        TNEFFile: string;
        Top: number;
        Width: number;
    }
    export interface MdTaskItemFlags extends MdFlags {
        NOINVITES: boolean;
        NOTNEF: boolean;
        SINGLE_OCCURRENCE: boolean;
        SYNC_USING_UTC: boolean;
    }
    export interface MD_TaskItem {
        ActHours: number;
        AttachmentCount: number;
        Attachments: MD_PIMAttachment;
        Billing: string;
        Categories: string;
        CodePage: number;
        Comment: string;
        CommentHtml: string;
        Companies: string;
        Complete: number;
        CompletedDate: Date;
        Creator: string;
        DAVDataFile: string;
        DueDate: Date;
        EstHours: number;
        Flags: MdTaskItemFlags;
        Id: number;
        IsPrivate: boolean;
        IsReadOnly: boolean;
        IsRecurring: boolean;
        Mileage: string;
        ModifiedTime: Date;
        Priority: number;
        Recurrence: MD_RecurrencePattern;
        Reminder: Date;
        Revision: number;
        Sequence: number;
        StartDate: Date;
        Status: number;
        Subject: string;
        TNEFFile: string;
        iCalUid: string;
    }

    export interface MD_RuleCondition {
        Header: string;
        MatchText: string;
        Relation: 'ISEQUALTO' | 'ISNOTEQUALTO' | 'CONTAINS' | 'DOESNOTCONTAIN' | 'STARTSWITH' | 'ENDSWITH' | 'EXISTS' | 'DOESNOTEXIST' | 'ISGREATERTHAN' | 'ISLESSTHAN';

    }
    export interface MD_Rule {
        Conditions: Array<MD_RuleCondition>;
        Email: string;
        Folder: string;
        LogicOperator?: 'AND' | 'OR'; // NumConditions > 1
        NumConditions: number;
    }

    //#endregion MDaemon API types

    //#region Alias APIs

    export function MD_CreateAlias(Email: string, Alias: string): boolean;
    export function MD_DeleteAlias(Alias: string, Email: string): boolean;
    export function MD_DeleteAllAliases(Email: string): boolean;
    export function MD_InvalidateAliases(): void;
    export function MD_IsValidAlias(Alias: string): boolean;
    /**
     * UNDOCUMENTED.
     * 
     * @param Alias Alias to translate.
     * @param Level Depth (0, -1, -2, -3, ...); default -1
     * @returns Either the Level-th translation, or the input.
     */
    export function MD_TranslateAlias(Alias: string, Level?: number): string;

    //#endregion

    //#region Application level APIs

    /**
     * UNDOCUMENTED
     * 
     * @param UnknownString 
     */
    export function MD_AttachmentLinkingDelete(UnknownString: string): number;
    /**
     * UNDOCUMENTED
     * 
     * @param UnknownInt 
     */
    export function MD_ClearSettingsCache(UnknownInt: number): string;
    /**
     * UNDOCUMENTED
     * 
     * @param RootPath 
     * @param Importance 
     * @param Prefix 
     * @param Extension 
     */
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
     * UNDOCUMENTED
     */
    export function MD_GetLicensesUsed(): number;
    /**
     * UNDOCUMENTED
     * 
     * @param Family OPTIONAL "AF_INET" (default) or "AF_INET6"
     */
    export function MD_GetMyIPAddresses(Family?: 'AF_INET' | 'AF_INET6'): Array<string>;
    /**
     * UNDOCUMENTED
     */
    export function MD_GetSharedListMemberInfo(): MD_ListMember;
    /**
     * UNDOCUMENTED
     */
    export function MD_GetSharedUserInfo(): MD_UserInfo;
    /**
     * UNDOCUMENTED
     */
    export function MD_InvalidateBadPasswords(): void;
    /**
     * UNDOCUMENTED
     */
    export function MD_InvalidateLANIPs(): void;
    /**
     * UNDOCUMENTED
     */
    export function MD_IsAVLicenseTooSmall(UserCount: number): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param Password 
     */
    export function MD_IsDynamicPasswordStr(Password: string): boolean;
    /**
     * UNDOCUMENTED
     */
    export function MD_IsProVersion(): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param Password 
     */
    export function MD_IsSecurePasswordStr(Password: string): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param Address 
     */
    export function MD_IsSystemAddress(Address: string): boolean;
    /**
     * UNDOCUMENTED
     */
    export function MD_IsTrialVersion(): boolean;
    /**
     * UNDOCUMENTED
     */
    export function MD_IsLicenseActive(): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param Msg 
     * @param wParam 
     * @param lParam 
     */
    export function MD_PostAppMessage(Msg: number, wParam: BigInt, lParam: BigInt): void;
    export function MD_RegisterWindow(hWnd: Buffer): boolean;
    export function MD_ReloadUsers(): void;
    /**
     * UNDOCUMENTED
     * 
     * @param Msg 
     * @param wParam 
     * @param lParam 
     */
    export function MD_SendAppMessage(Msg: number, wParam: BigInt, lParam: BigInt): void;
    /**
     * UNDOCUMENTED
     * 
     * @param GhostCount 
     */
    export function MD_SetGhostCount(GhostCount: number): void;
    /**
     * UNDOCUMENTED
     * 
     * @param Flag 
     */
    export function MD_SetNotificationFlag(Flag: number): void;
    /**
     * UNDOCUMENTED
     * 
     * @param UnknownString 
     */
    export function MD_StripSubAddressedPath(UnknownString: string): string;
    /**
     * Unregister a window handle with MDUSER.DLL.
     * 
     * @param hWnd handle to unregister
     */
    export function MD_UnregisterWindow(hWnd: Buffer): boolean;
    /**
     * @summary Get the total number of mailboxes managed by MDaemon in
     * all domains.
     * 
     * @returns {number}
     */
    export function MD_UserCount(): number;
    /**
     * UNDOCUMENTED
     */
    export function MD_UserLicenseFull(): boolean;

    //#endregion

    //#region AppPassword APIs

    /**
     * UNDOCUMENTED
     * 
     * @param hUser 
     * @param AppPassword
     * 
     * @returns password, if OK; otherwise undefined.
     */
    export function MD_AppPasswordCreate(hUser: Buffer, AppPassword: MD_AppPassword): string | undefined;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser 
     * @param ID 
     */
    export function MD_AppPasswordDelete(hUser: Buffer, ID: string): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser 
     */
    export function MD_AppPasswordDeleteAll(hUser: Buffer): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser 
     */
    export function MD_AppPasswordGetAll(hUser: Buffer): Array<MD_AppPassword> | undefined;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser 
     * @param ID 
     */
    export function MD_AppPasswordGetByID(hUser: Buffer, ID: string): MD_AppPassword | undefined;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser 
     */
    export function MD_AppPasswordGetCount(hUser: Buffer): number | undefined;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser 
     * @param ID 
     * @param NewName 
     */
    export function MD_AppPasswordRename(hUser: Buffer, ID: string, NewName: string): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser 
     */
    export function MD_GetRequireAppPassword(hUser: Buffer): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser 
     * @param Value 
     */
    export function MD_SetRequireAppPassword(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser 
     * @param Password 
     * @param IP 
     * 
     * @returns AppPassword ID, if validated; otherwise undefined.
     */
    export function MD_AppPasswordValidate(hUser: Buffer, Password: string, IP: string): string | undefined;

    //#endregion

    //#region Authentication APIs

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

    //#endregion

    //#region Calendar APIs

    export function MD_CalGetCalItem(Id: number, Path: string, Requester?: string): MdApiResult<MD_CalItem>;
    export function MD_CalGetDefaultFolder(hUser: Buffer): string;
    export function MD_CalInitCalItem(): MD_CalItem;
    export function MD_CalInitCalItem2(Month: number, Day: number, Year: number, Hour: number, Minute: number): MD_CalItem;

    //#endregion

    //#region Clustering APIs

    export function MD_ClusterGetEnabled(): boolean;
    export function MD_ClusterGetLocalNodeId(): number;
    export function MD_ClusterGetLocalServerGUID(): string | undefined;
    export function MD_ClusterGetLocalServerId(): number;
    export function MD_ClusterGetNodeId(ComputerName: string): number;
    export function MD_ClusterGetPrimaryComputerName(): string;
    export function MD_ClusterGetServerGUID(ComputerName: string): string | undefined;
    export function MD_ClusterGetServerId(ComputerName: string): number;
    export function MD_ClusterLocalNodeIsPrimary(): boolean;

    //#endregion

    //#region Contacts APIs

    export function MD_ContactDeleteAllItems(Path: string): MdApiResultBase;
    export function MD_ContactGetAllItems(Path: string): MdApiResult<MD_ContactItem[]>;
    export function MD_ContactGetBlackListFolder(hUser: Buffer): string;
    export function MD_ContactGetDefaultFolder(hUser: Buffer): string;
    export function MD_ContactGetDomainAllowedSendersFolder(DomainName: string): string | undefined;
    export function MD_ContactGetPublicFolder(hUser: Buffer): string;
    export function MD_ContactGetWhiteListFolder(hUser: Buffer): string;
    export function MD_ContactInitItem(): MD_ContactItem;
    export function MD_ContactPubAllowedSendersCheck(Path: string, Sender: string): boolean;

    //#endregion

    //#region Document APIs

    export function MD_DocumentDeleteDocument(Path: string, Id: number, Requester?: string): boolean;
    export function MD_DocumentGetDefaultFolder(hUser: Buffer): string;
    export function MD_DocumentGetDescription(Path: string, Id: number, Requester?: string): string | undefined;
    export function MD_DocumentGetFileName(Path: string, Id: number, Requester?: string): string | undefined;
    export function MD_DocumentGetFileSize(Path: string, Id: number, Requester?: string): BigInt | undefined
    export function MD_DocumentGetModifiedBy(Path: string, Id: number, Requester?: string): string | undefined
    export function MD_DocumentGetModifiedTime(Path: string, Id: number, Requester?: string): Date | undefined
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
        Description?: string;
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
    export interface MdGetMultipleItemsResponse extends MdApiResultBase {
        IDs?: number[],
        ItemCount: number,
        Page: number,
        Path: string,
        Sort: 'ASC' | 'DESC',
    }
    export function MD_DocumentGetMultipleItems(
        Page: number,
        ItemCount: number,
        Sort: 'ASC' | 'DESC',
        Path: string,
        Search?: string,
        Requester?: string
    ): MdGetMultipleItemsResponse;
    export function MD_DocumentRenameDocument(
        Path: string,
        Id: number,
        NewFileName: string,
        Requester?: string
    ): boolean;
    export function DocumentSetDescription(
        Path: string,
        Id: number,
        Description: string,
        Requester?: string
    ): MdApiResultBase;

    //#endregion

    //#region Domain APIs

    export function MD_DeleteDomain(DomainName: string): void;
    export function MD_GetDomainCount(): number;
    export function MD_GetDomainIP(DomainName: string): string;
    export function MD_GetDomainIP6(DomainName: string): string;
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

    //#endregion

    //#region Gateway APIs

    export function MD_DeleteGateway(GatewayName: string, RemoveDir: boolean): void;
    export function MD_GetGatewayNames(): string[];
    export function MD_GatewayLicenseFull(): boolean;
    export function MD_GetGatewayCount(): number;
    export function MD_InitGatewayInfo(GatewayName: string): MD_Gateway;
    export function MD_VerifyGatewayInfo(Gateway: MD_Gateway): MdApiResultBase;
    export function MD_WriteGateway(Gateway: MD_Gateway): MdApiResultBase;

    //#endregion

    //#region Group APIs

    export function MD_GroupAddMember(Email: string, GroupName: string): boolean;
    export function MD_GroupClearCache(): void;
    /**
     * UNDOCUMENTED
     * 
     * @param ExistingGroupName 
     * @param NewGroupName 
     * @param NewGroupDescription 
     */
    export function MD_GroupCopy(ExistingGroupName: string, NewGroupName: string, NewGroupDescription: string): boolean;
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

    //#endregion

    //#region List APIs

    export const enum MdListMemberMode {
        DEFAULT = 0,
        NORMAL = 1,
        POSTONLY = 2,
        READONLY = 3,
        DIGEST = 4,
    }

    export const enum MdVerifyListResult {
        NOERROR = 0,
        INVALIDLISTNAME = 1,
        INVALIDEMAILADDRESS = 2,
        INVALIDREMOTEHOST = 3,
    }

    export interface MdListMemberFlags {
        ViaAd?: boolean;
        ViaOdbc?: boolean;
    }

    export interface MD_ListMember {
        Email: string;
        ListName: string;
        RealName: string;
        Type: MdListMemberMode;
        Flags?: MdListMemberFlags;
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

    export interface MdListArchiveCatalogConfig {
        catalog?: string;
        enabled: boolean;
    }
    export interface MdListMemberInfo {
        isMember: boolean;
        isReadOnly: boolean;
    }
    export interface MdListAddressInfo {
        ListName: string;
        Email: string;
    }
    export interface MdListModeratedInfo extends MdListAddressInfo {
        // ListName: string; // list's name (address)
        // Email: string; // moderator's email (address)
        Password: string;
        PasswordPost: boolean;
    }
    export type MdListSubscribeNoteInfo = MdListAddressInfo;
    export type MdListUnsubscribeNoteInfo = MdListAddressInfo;

    export function MD_ClearListSettingsCache(ListName?: string): void;
    export function MD_DeleteList(ListName: string): void;
    export function MD_GetListBoolKey(ListName: string, Key: string): boolean;
    export function MD_GetListLongKey(ListName: string, Key: string): number;
    export function MD_GetListStringKey(ListName: string, Key: string): string | undefined;
    export function MD_InitListInfo(ListName: string): MD_List;
    /**
     * Add email address to a list.
     * 
     * @param ListName list name; example "example-list@example.com"
     * @param Email addess to subscribe
     * @param RealName real name for Email
     * @param Mode subscription mode
     * @param SendWelcome send welcome message
     * 
     * @see {MdListMemberMode}
     */
    export function MD_ListAddMember(
        ListName: string,
        Email: string,
        RealName: string,
        Mode: MdListMemberMode,
        SendWelcome: boolean
    ): boolean;
    export function MD_ListAllowExpn(ListName: string): boolean;
    /**
     * Get a list's AllowSubscribe flag.
     * 
     * @param ListName list name; example "example-list@example.com"
     * 
     * @returns true if the list processes subscription requests; false otherwise
     */
    export function MD_ListAllowSubscribe(ListName: string): boolean;
    /**
     * Get a list catalog archive configuration.
     * 
     * @param ListName list name; example "example-list@example.com"
     * 
     * @see {MdListArchiveCatalogConfig}
     */
    export function MD_ListArchiveCatalog(ListName: string): MdListArchiveCatalogConfig;
    /**
     * Get a list's CrackMessage flag.
     * 
     * @param ListName list name; example "example-list@example.com"
     * 
     * @returns true if the list cracks messages; false otherwise
     */
    export function MD_ListCrackMessage(ListName: string): boolean;
    /**
     * Convert to string a list's default subscription mode.
     * 
     * @param ListName list name; example "example-list@example.com"
     * 
     * @returns 'Normal', 'Post only', 'Read only', or 'Digest'
     * 
     * @see {MdListMemberMode}
     */
    export function MD_ListDefaultMode(ListName: string): string | undefined;
    /**
     * Return the name of the digest MBF file.
     * 
     * @param ListName list name; example "example-list@example.com"
     */
    export function MD_ListDigestMBF(ListName: string): string | undefined;
    /**
     * UNDOCUMENTED
     * 
     * @param ListName list name; example "example-list@example.com"
     */
    export function MD_ListEnabled(ListName: string): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param ListName list name; example "example-list@example.com"
     */
    export function MD_ListExists(ListName: string): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @returns the number of defined lists
     */
    export function MD_ListGetCount(): number;
    /**
     * UNDOCUMENTED
     * 
     * @returns an array with list names
     */
    export function MD_ListGetNames(): string[];
    /**
     * UNDOCUMENTED
     */
    export function MD_ListGetNamesByMember(Address: string): string[];
    /**
     * UNDOCUMENTED
     * 
     * @param ListName list's name - Example: example-list@example.com
     * 
     * @returns the full name of the *.grp file for ListName. Undefined otherwise.
     */
    export function MD_ListGetPathName(ListName: string): string | undefined;
    /**
     * UNDOCUMENTED
     * 
     * @param ListName list's name - Example: example-list@example.com
     */
    export function MD_ListGetReminderPath(ListName: string): string | undefined;
    /**
     * Get a list's InsertCaption flag.
     *
     * @param ListName list's name - Example: example-list@example.com
     */
    export function MD_ListInsertCaption(ListName: string): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param List list info object to check
     */
    export function MD_ListIsDBReady(List: MD_List): boolean;
    /**
     * Check if Email is a member of list ListName.
     * 
     * @param ListName list's name - Example: example-list@example.com
     * @param Email address to check for membership
     * @param CheckAdmins OPTIONAL if true, consider global administrators members; default false
     */
    export function MD_ListIsMember(
        ListName: string,
        Email: string,
        CheckAdmins?: boolean): MdListMemberInfo;
    /**
     * Returns the number of members of a list
     * 
     * @param ListName list's name - Example: example-list@example.com
     */
    export function MD_ListMemberCount(ListName: string): number;
    /**
     * Return moderation informations if a list is moderated.
     * 
     * @param ListName list's name - Example: example-list@example.com
     */
    export function MD_ListModerated(ListName: string): MdListModeratedInfo | undefined;
    /**
     * Return the address to send note to if a message is too big.
     * 
     * @param ListName list's name - Example: example-list@example.com
     */
    export function MD_ListMsgTooBigNote(ListName: string): string | undefined;
    /**
     * Return the list's notification address, if present.
     * 
     * @param ListName list's name - Example: example-list@example.com
     */
    export function MD_ListNotificationAddress(ListName: string): string | undefined;
    /**
     * Return a list's password, if defined.
     * 
     * @param ListName list's name - Example: example-list@example.com
     */
    export function MD_ListPassword(ListName: string): string | undefined;
    /**
     * Get a list's precedence level. Default is bulk (80).
     * 
     * @param ListName list's name - Example: example-list@example.com
     */
    export function MD_ListPrecedenceLevel(ListName: string): number;
    /**
     * Get a list's AllowSubscribe flag.
     * 
     * @param ListName list's name - Example: example-list@example.com
     *
     * @returns true if only members can post; false otherwise
     */
    export function MD_ListPrivate(ListName: string): boolean;
    /**
     * Removes a member from all mailing lists
     * 
     * @param Email address to remove
     * 
     * @returns false only if Email is a member of no mailing list.
     */
    export function MD_ListRemoveFromAll(Email: string): boolean;
    /**
     * Remove an address from a mailing list
     * 
     * @param ListName list's name - Example: example-list@example.com
     * @param Email address to remove
     */
    export function MD_ListRemoveMember(ListName: string, Email: string): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param ListName list's name - Example: example-list@example.com
     * @param OldEmail 
     * @param NewEmail 
     */
    export function MD_ListReplaceMember(ListName: string, OldEmail: string, NewEmail: string): boolean;
    /**
     * Change an existing list members digest mode.
     * 
     * @param ListName list's name - Example: example-list@example.com
     * @param Email list member address to change digest mode
     * @param Mode new digest mode (true=enabled; false=disabled)
     */
    export function MD_ListSetDigest(ListName: string, Email: string, Mode: boolean): boolean;
    /**
     * Changes an existing list member nomail mode.
     * 
     * @param ListName list's name - Example: example-list@example.com
     * @param Email list member address to change nomail mode
     * @param Mode new nomail mode (true=enabled; false=disabled)
     */
    export function MD_ListSetNomail(ListName: string, Email: string, Mode: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param ListName list's name - Example: example-list@example.com
     * @param Email list member address to set normal mode
     */
    export function MD_ListSetNormal(ListName: string, Email: string): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param ListName list's name - Example: example-list@example.com
     * @param Email list member address to change read-only mode
     * @param Mode new read-only mode (true=enabled; false=disabled)
     */
    export function MD_ListSetReadOnly(ListName: string, Email: string, Mode: boolean): boolean;
    /**
     * Change an existing list member's real name.
     * 
     * @param ListName list's name - Example: example-list@example.com
     * @param Email address of the list member whose real name is to be changed
     * @param RealName new real name
     */
    export function MD_ListSetRealName(ListName: string, Email: string, RealName: string): boolean;
    /**
     * Return subscription informations if a list is enabled to notify
     * an address on subscription.
     * 
     * @param ListName list's name - Example: example-list@example.com
     * 
     * @returns {MdListSubscribeNoteInfo} if ListName has subscription
     * notification enabled; otherwise undefined.
     */
    export function MD_ListSubscribeNote(ListName: string): MdListSubscribeNoteInfo | undefined;
    /**
     * Check if an e-mail address is forbidden to send to a list.
     * 
     * @param ListName list's name - Example: example-list@example.com
     * @param Email address to check
     */
    export function MD_ListSuppressed(ListName: string, Email: string): boolean;
    /**
     * Return unsubscription informations if a list is enabled to notify
     * an address on unsubscription.
     * 
     * @param ListName list's name - Example: example-list@example.com
     * 
     * @returns {MdListUnsubscribeNoteInfo} if ListName has unsubscription
     * notification enabled; otherwise undefined.
     */
    export function MD_ListUnsubscribeNote(ListName: string): MdListUnsubscribeNoteInfo | undefined;
    /**
     * UNDOCUMENTED
     * 
     * @param OldDomain 
     * @param NewDomain 
     */
    export function MD_ListUpdateDomain(OldDomain: string, NewDomain: string): boolean;
    /**
     * Add a member to a mailing list.
     * 
     * @param Member member data used to add to the list
     * @param SendWelcome OPTIONAL default false
     */
    export function MD_ListWriteMember(Member: MD_ListMember, SendWelcome?: boolean): boolean;
    /**
     * Verify the passed List object is OK.
     * 
     * @param List list info object to verify
     */
    export function MD_VerifyListInfo(List: MD_List): MdVerifyListResult;
    /**
    * Write a mailing list info object to disk.
    * 
    * @param List list info object to write
    */
    export function MD_WriteList(List: MD_List): boolean;

    //#endregion

    //#region Message APIs
    //--------------------------------------------------------------------------

    /**
     * UNDOCUMENTED
     * 
     * @param MessageFile 
     */
    export function MD_DeleteMessageFile(MessageFile: string): boolean;
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

    //#endregion

    //#region MultiPOP APIs
    export function MD_AddMultiPOPItem(hUser: Buffer, Item: MD_MultiPOPItem): boolean;
    export function MD_DeleteMultiPOPItem(hUser: Buffer, Item: MD_MultiPOPItem): boolean;
    export function MD_GetEnableMultiPOP(hUser: Buffer): boolean;
    export function MD_GetMultiPOPItems(hUser: Buffer, MaxCount?: number /* = 128 */): MD_MultiPOPItem[];
    export function MD_GetMultiPOPMaxMessageAge(hUser: Buffer): number;
    export function MD_GetMultiPOPMaxMessageSize(hUser: Buffer): number;
    export function MD_InitMultiPOPItem(): MD_MultiPOPItem;
    export function MD_SetEnableMultiPOP(hUser: Buffer, Value: boolean): boolean;
    export function MD_SetMultiPOPItems(hUser: Buffer, Items: MD_MultiPOPItem[]): boolean;
    export function MD_SetMultiPOPMaxMessageAge(hUser: Buffer, Value: number): boolean;
    export function MD_SetMultiPOPMaxMessageSize(hUser: Buffer, Value: number): boolean;
    //#endregion

    //#region Note APIs
    //--------------------------------------------------------------------------

    export function MD_NoteDeleteAllAttachments(NoteItem: MD_NoteItem): void;
    export function MD_NoteDeleteAllItems(Path: string): MdApiResultBase;
    export function MD_NoteGetDefaultFolder(hUser: Buffer): string;
    export function MD_NoteGetNoteItem(Path: string, Id: number, Requester?: string): MdApiResult<MD_NoteItem>;
    export function MD_NoteInitNoteItem(): MD_NoteItem;
    export function MD_NoteItemCompare(Note1: MD_NoteItem, Note2: MD_NoteItem): boolean;
    export function MD_NoteWriteNoteItem(Note: MD_NoteItem, Path: string, Requester: string): MdApiResultBase;

    //#endregion

    //#region Queue APIs

    export function MD_GetRemoteQueues(): string[];
    export function MD_IsAlreadyAQueue(QueueName: string): boolean;

    //#endregion Queue APIs

    //#region Task APIs
    //--------------------------------------------------------------------------

    export function MD_TaskDeleteAllItems(Path: string): MdApiResultBase;
    export function MD_TaskDeleteTaskItem(Path: string, Id: number, Requester?: string): MdApiResultBase;
    export function MD_TaskGetAllItems(Path: string): MdApiResult<MD_TaskItem[]>;
    export function MD_TaskGetDefaultFolder(hUser: Buffer): string;
    export function MD_TaskGetIDFromiCalUid(Path: string, Uid: string): number | undefined;
    export function MD_TaskGetTaskItem(Path: string, Id: number, Requester?: string): MdApiResult<MD_TaskItem>;
    export function MD_TaskInitTaskItem(): MD_TaskItem;

    //#endregion

    //#region User APIs
    //--------------------------------------------------------------------------

    /**
     * Add a new account to the account database
     * 
     * @param UserInfo MD_UserInfo object containing the details of the new user
     * @param Flags OPTIONAL reserved, must be 0
     */
    export function MD_AddUser(
        UserInfo: MD_UserInfo,
        Flags?: number /* = 0 */
    ): MdApiResultBase;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Password password to check
     */
    export function MD_CompromisedPasswordCheck(
        hUser: Buffer,
        Password: string
    ): boolean;
    /**
     * UNDOCUMENTED
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
     * A user's quota metrics.
     */
    export interface MdQuotaCounts {
        FileCount: number;
        KByteCount: number;
    }
    /**
     * A user access type.
     * 
     * @see MD_SetAccessType
     * @see MD_GetAccessType
     */
    export interface MdAccessType {
        IMAP: boolean;
        POP: boolean;
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
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     */
    export function MD_EraseAutoResp(hUser: Buffer): boolean;
    /**
    * UNDOCUMENTED
    */
    export function MD_FlagReloadUsers(): void;
    /**
     * Get a user's POP service and IMAP service access flags. (NEW)
     * 
     * @param hUser buffer containing a user's handle
     * @returns {MdAccessType}
     */
    export function MD_GetAccessType(hUser: Buffer): MdAccessType;
    export function MD_GetAllowChangeViaEmail(hUser: Buffer): boolean;
    export function MD_GetAllowIMAPAccess(hUser: Buffer): boolean;
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
    /**
    * Get a user's create placeholder events flag.
    * 
    * @param hUser buffer containing a user's handle
    */
    export function MD_GetCreatePlaceholderEvents(hUser: Buffer): boolean;
    export function MD_GetDBPath(db: MdDatabase): string;
    /**
     * Get a user's decline conflicting requests flag.
     * 
     * @param hUser buffer containing a user's handle
     */
    export function MD_GetDeclineConflictingRequests(hUser: Buffer): boolean;
    /**
     * Get a user's decline recurring requests flag.
     * 
     * @param hUser buffer containing a user's handle
     */
    export function MD_GetDeclineRecurringRequests(hUser: Buffer): boolean;
    /**
     * Get a user's mailbox size in kB.
     * 
     * @param hUser buffer containing a user's handle
     */
    export function MD_GetDirSize(hUser: Buffer): number;
    /**
     * Get a user's domain.
     * 
     * @param hUser buffer containing a user's handle
     * 
     * @returns a user's domain, or undefined if hUser is not valid
     */
    export function MD_GetDomain(hUser: Buffer): string | undefined;
    export function MD_GetDoNotDisturb(hUser: Buffer): boolean;
    export function MD_GetDontExpirePassword(hUser: Buffer): boolean;
    /**
     * 
     * @param hUser buffer containing a user's handle
     */
    export function MD_GetEditIMAPRules(hUser: Buffer): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     */
    export function MD_GetExtractInbound(hUser: Buffer): boolean;
    export function MD_GetEnableAIMessageFeatures(hUser: Buffer): boolean;
    export function MD_GetEnableComAgent(hUser: Buffer): boolean;
    export function MD_GetEnableInstantMessaging(hUser: Buffer): boolean;
    export function MD_GetExemptFromAuthMatch(hUser: Buffer): boolean;
    /**
     * UNDOCUMENTED 
     * 
     * @param hUser buffer containing a user's handle
     */
    export function MD_GetExtractOutbound(hUser: Buffer): boolean;
    export function MD_GetFileCount(hUser: Buffer): number | undefined;
    export function MD_GetForwardingInfo(hUser: Buffer): MD_Forwarding;
    export function MD_GetFree(hUser: Buffer): void;
    /**
     * Get a user's full name.
     * 
     * @param hUser buffer containing a user's handle
     * @returns user's full name, if hUser is valid; undefined otherwise
     */
    export function MD_GetFullName(hUser: Buffer): string | undefined;
    export function MD_GetHideFromEveryone(hUser: Buffer): boolean;
    export function MD_GetIsAdmin(hUser: Buffer): boolean;
    export function MD_GetIsDisabled(hUser: Buffer): boolean;
    export function MD_GetIsDomainAdmin(hUser: Buffer, Domain: string): boolean;
    export function MD_GetIsForwarding(hUser: Buffer): boolean;
    export function MD_GetIsFrozen(hUser: Buffer): boolean;
    export function MD_GetKeepForwardedMail(hUser: Buffer): boolean;
    /**
     * Gets a user's mailbox.
     * 
     * @param hUser buffer containing a user's handle
     * 
     * @returns mailbox, if hUser is valid; undefined otherwise
     */
    export function MD_GetMailbox(hUser: Buffer): string | undefined;
    export function MD_GetMailDir(hUser: Buffer): string | undefined;
    export function MD_GetMaxDiskSpace(hUser: Buffer): number;
    export function MD_GetMaxMessageCount(hUser: Buffer): number;
    export function MD_GetMustChangePassword(hUser: Buffer): boolean;
    export function MD_GetPassword(hUser: Buffer): string;
    export function MD_GetPasswordCreateDate(hUser: Buffer): Date;
    export function MD_GetProcessCalendarRequests(hUser: Buffer): boolean;
    export function MD_GetPruningFlags(hUser: Buffer): MdPruningFlags;
    /**
     * Get a user's mailbox file count and size (in kiB).
     * 
     * @param hUser buffer containing a user's handle
     */
    export function MD_GetQuotaCounts(hUser: Buffer): MdQuotaCounts;
    export function MD_GetRequireTFA(hUser: Buffer): boolean;
    export function MD_GetSignatureFile(hUser: Buffer): string | undefined;
    export function MD_GetSubAddressing(hUser: Buffer): boolean;
    /**
     * UNDOCUMENTED
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
     * @example
     * 
     * This is a translation of C++ example from MD-API.html to TS:
     * 
     * const hUser = md.MD_GetByEmail("arvel@altn.com");
     * if (md.isBadHandle(hUser)) {
     *      // handle error
     * } else {
     *      let userInfo: MD_UserInfo = md.MD_GetUserInfo(hUser);
     *      userInfo.Mailbox = 'frank';
     *      userInfo.Domain = 'thomas.com';
     *      const verification = md.MD_VerifyUserInfo(userInfo, ['ALL']);
     *      if (verification == MdVerifyUserInfoResult.NOERROR) {
     *          // userInfo data OK
     *          if (md.MD_SetUserInfo(hUser, userInfo)) {
     *              // user updated
     *          } else {
     *              // handle error
     *          }
     *      } else {
     *          // handle error
     *      }
     *      md.MD_GetFree(hUser);
     * }
     */
    export function MD_SetUserInfo(hUser: Buffer, UserInfo: MD_UserInfo): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     */
    export function MD_IsPasswordTooOld(hUser: Buffer): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param OldPath 
     * @param NewPath 
     * @param UserEmail 
     * @param UserMailRoot 
     */
    export function MD_RenameUserFolder(
        OldPath: string,
        NewPath: string,
        UserEmail: string,
        UserMailRoot: string
    ): boolean;
    /**
     * UNDOCUMENTED
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
     * Set a user's allow POP and allow IMAP access flags.
     * 
     * @param hUser buffer containing a user's handle
     * @param POP allow | prohibit the use of the POP service by the user
     * @param IMAP allow | prohibit the use of the IMAP service by the user
     */
    export function MD_SetAccessType(hUser: Buffer, POP: boolean, IMAP: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetAllowChangeViaEmail(hUser: Buffer, Value?: boolean): boolean;
    /**
     * Set a user's allow IMAP access flag (NEW).
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetAllowIMAPAccess(hUser: Buffer, Value?: boolean): boolean;
    /**
     * Set a user's allow POP3 access flag (NEW).
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetAllowPOPAccess(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true 
     */
    export function MD_SetAllowTFA(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true 
     */
    export function MD_SetApplyDomainSignature(hUser: Buffer, Value?: boolean): boolean;
    /**
     * Set a user's apply quotas flag.
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true 
     */
    export function MD_SetApplyQuotas(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetAttachmentLinking(hUser: Buffer, Value?: boolean): boolean;
    /**
     * Set the user's AutoDecode flag.
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetAutoDecode(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Comments OPTIONAL comments text
     */
    export function MD_SetComments(hUser: Buffer, Comments?: string): boolean;
    /**
     * Set a user's create placeholder events flag.
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetCreatePlaceholderEvents(hUser: Buffer, Value?: boolean): boolean;
    /**
     * Set a user's decline conflicting requests flag.
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetDeclineConflictingRequests(hUser: Buffer, Value?: boolean): boolean;
    export function MD_SetDeclineRecurringRequests(hUser: Buffer, Value?: boolean): boolean;
    /**
     * Set a user's domain.
     * 
     * @param hUser buffer containing a user's handle
     * @param DomainName domain to set
     */
    export function MD_SetDomain(hUser: Buffer, DomainName: string): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetDontExpirePassword(hUser: Buffer, Value?: boolean): boolean;
    /**
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetEditIMAPRules(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     */
    export function MD_SetEnableAIMessageFeatures(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetEnableComAgent(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetEnableInstantMessaging(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetExemptFromAuthMatch(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetExtractInbound(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetExtractOutbound(hUser: Buffer, Value?: boolean): boolean;
    /**
     * Set a user's full name.
     * 
     * @param hUser buffer containing a user's handle
     * @param FullName user's full name
     */
    export function MD_SetFullName(hUser: Buffer, FullName: string): boolean | undefined;
    /**
     * Set a user's hide from everyone flag.
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetHideFromEveryone(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetIsDisabled(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Domain domain name
     * @param Value true | false
     */
    export function MD_SetIsDomainAdmin(hUser: Buffer, Domain: string, Value: boolean): void;
    /**
     * Set a user's forwarding flag.
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetIsForwarding(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetIsFrozen(hUser: Buffer, Value?: boolean): boolean;
    /**
     * Set a user's keep forwarded mail flag.
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetKeepForwardedMail(hUser: Buffer, Value?: boolean): boolean;
    /**
     * Set a user's mailbox.
     * 
     * @param hUser buffer containing a user's handle
     * @param Mailbox user's mailbox
     */
    export function MD_SetMailbox(hUser: Buffer, Mailbox: string): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default 0
     */
    export function MD_SetMaxDiskSpace(hUser: Buffer, Value?: number): boolean;
    /**
     * Set user's max message count limit.
     * Set to 0, to remove the limit.
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default 0
     */
    export function MD_SetMaxMessageCount(hUser: Buffer, Value?: number): boolean;
    export function MD_SetMailDir(hUser: Buffer, MailDir: string): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetMustChangePassword(hUser: Buffer, Value?: boolean): boolean;
    export function MD_SetPassword(hUser: Buffer, Password: string): void;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetProcessCalendarRequests(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetRequireTFA(hUser: Buffer, Value?: boolean): boolean;
    /**
     * UNDOCUMENTED
     * 
     * @param hUser buffer containing a user's handle
     * @param Value OPTIONAL default true
     */
    export function MD_SetSubAddressing(hUser: Buffer, Value?: boolean): boolean;
    export function MD_SetUseDefaultPruning(hUser: Buffer, Value?: boolean): boolean;
    export function MD_VerifyAccountDB(): boolean;

    //#endregion

    //#region User template APIs
    //--------------------------------------------------------------------------

    export function MD_TemplateCopy(ExistingTemplateName: string, NewTemplateName: string): boolean;
    export function MD_TemplateCreate(TemplateName: string): boolean;
    export function MD_TemplateDelete(TemplateName: string): boolean;
    export function MD_TemplateExists(TemplateName: string): boolean;
    export function MD_TemplateGetAll(): string[];
    export function MD_TemplateGetFlags(TemplateName: string): number;
    export function MD_TemplateSetFlags(TemplateName: string, Flags: number): boolean;
    export function MD_TemplateWrite(UserInfo: MD_UserInfo, TemplateName: string): void;

    //#endregion

    //#region WorldClient APIs
    //--------------------------------------------------------------------------

    /**
     * UNDOCUMENTED
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
     * UNDOCUMENTED
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

    //#endregion

    //#region Rules

    /**
     * Add an IMAP rule to a user's rule list.
     * 
     * @param hUser handle to a valid user
     * @param Rule MD_Rule object to add
     */
    export function MD_AddRule(hUser: Buffer, Rule: MD_Rule): boolean;
    /**
     * Update an existing IMAP rule
     * 
     * @param hUser handle to a valid user
     * @param Id existing rule's index
     * @param Rule Rule object to use to update rule with given Id
     */
    export function MD_ChangeRule(hUser: Buffer, Id: number, Rule: MD_Rule): boolean;
    /**
     * Delete a user's IMAP rule by Id
     * 
     * @param hUser handle to a valid user
     * @param Id IMAP rule index, starting at 0 for the first rule
     */
    export function MD_DeleteRule(hUser: Buffer, Id: number): boolean;
    /**
     * Move an existing IMAP rule to index+1
     * 
     * @param hUser handle to a valid user
     * @param Id index of an existing rule
     */
    export function MD_MoveRuleDown(hUser: Buffer, Id: number): boolean;
    /**
     * Move an existing IMAP rule to index-1
     * 
     * @param hUser handle to a valid user
     * @param Id index of an existing rule
     */
    export function MD_MoveRuleUp(hUser: Buffer, Id: number): boolean;
    /**
     * Read a user's IMAP rule
     * 
     * @param hUser handle to a valid user
     * @param Id IMAP rule index, starting at 0 for the first rule
     */
    export function MD_ReadRule(hUser: Buffer, Id: number): MD_Rule | undefined;
    /**
     * Deserialize a string to an MD_Rule object.
     * 
     * @param Rule rule string to deserialise
     */
    export function MD_RuleStringToRuleStruct(Rule: string): MD_Rule | undefined;
    /**
     * Serialise a MD_Rule object to a string.
     * 
     * @param Rule rule object to serialise
     */
    export function MD_RuleStructToRuleString(Rule: MD_Rule): string | undefined;
    /**
     * UNDOCUMENTED
     * 
     * @param Email 
     * @param DisplayPath 
     * @param DB 
     * @param Enable OPTIONAL DEFAULT false 
     */
    export function MD_SetupTicketRules(Email: string, DisplayPath: string, DB: string, Enable?: boolean): void;
    /**
     * Read a user's IMAP rule list
     * 
     * @param hUser handle to a valid user
     */
    export function readRulesSync(hUser: Buffer): Array<MD_Rule>;
    /**
     * Read a user's IMAP rule list asynchronously
     * 
     * @param hUser handle to a valid user
     * @param callback async callback
     */
    export function readRules(hUser: Buffer, callback: (err: Error | null, rules: Array<MD_Rule>) => void): undefined;

    //#endregion Rules

    //#endregion
}