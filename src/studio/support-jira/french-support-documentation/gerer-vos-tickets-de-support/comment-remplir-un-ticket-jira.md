---
title: Comment remplir un ticket Jira
review:
    comment: ''
    date: ''
    status: ok
labels:
    - jira-fr
toc: true
confluence:
    ajs-parent-page-id: '18448691'
    ajs-parent-page-title: Gérer vos tickets de support
    ajs-space-key: Studio
    ajs-space-name: Nuxeo Online Services
    canonical: Comment+remplir+un+ticket+Jira
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Comment+remplir+un+ticket+Jira'
    page_id: '18448693'
    shortlink: NYEZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/NYEZAQ'
    source_link: /display/Studio/Comment+remplir+un+ticket+Jira
tree_item_index: 100
history:
    -
        author: Solen Guitter
        date: '2015-10-30 13:57'
        message: ''
        version: '18'
    -
        author: Julie Allouch
        date: '2015-10-30 13:39'
        message: ''
        version: '17'
    -
        author: Julie Allouch
        date: '2015-10-30 13:37'
        message: ''
        version: '16'
    -
        author: Solen Guitter
        date: '2015-09-18 12:29'
        message: Change layout to use 2/3 layout
        version: '15'
    -
        author: Solen Guitter
        date: '2014-12-30 16:56'
        message: ''
        version: '14'
    -
        author: Solen Guitter
        date: '2014-08-28 15:27'
        message: ''
        version: '13'
    -
        author: Solen Guitter
        date: '2014-08-28 15:21'
        message: ''
        version: '12'
    -
        author: Solen Guitter
        date: '2014-01-27 11:26'
        message: ''
        version: '11'
    -
        author: Thierry Martins
        date: '2014-01-15 10:49'
        message: ''
        version: '10'
    -
        author: Thierry Martins
        date: '2014-01-15 10:46'
        message: detail sur la criticité
        version: '9'
    -
        author: Thierry Martins
        date: '2014-01-03 15:48'
        message: ''
        version: '8'
    -
        author: Solen Guitter
        date: '2014-01-03 14:56'
        message: ''
        version: '7'
    -
        author: Solen Guitter
        date: '2014-01-03 14:56'
        message: ''
        version: '6'
    -
        author: Solen Guitter
        date: '2014-01-03 14:39'
        message: ''
        version: '5'
    -
        author: Solen Guitter
        date: '2014-01-03 14:30'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-01-03 14:17'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-01-03 12:03'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-01-02 18:04'
        message: ''
        version: '1'

---
{{#> callout type='info' }}

Suivre les recommandations d&eacute;crites ci-dessous permettra d'avoir un d&eacute;lai de traitement de vos tickets plus rapide. D'autre part, les tickets peuvent &ecirc;tre r&eacute;dig&eacute;s indiff&eacute;remment en fran&ccedil;ais ou en anglais.

{{/callout}}

L'&eacute;cran de cr&eacute;ation est compos&eacute; de deux parties : le premier onglet, **Main fields**, pr&eacute;sente les principaux champs &agrave; renseigner (titre, description, criticit&eacute;, version), tandis que le second, **Advanced fields**, propose les champs optionnels ou de moindre importance pour la r&eacute;solution du ticket.

{{#> callout type='info' }}

Un ticket doit correspondre &agrave; un probl&egrave;me. N'h&eacute;sitez pas &agrave; cr&eacute;er un autre ticket pour signaler un autre incident.

{{/callout}}

**Pour cr&eacute;er un ticket JIRA :**

{{! multiexcerpt name='jira-ticket-creation-steps'}}

1. &nbsp;Dans JIRA, cliquez sur le bouton **Cr&eacute;er une demande**.
2. S&eacute;lectionnez le projet **Support Nuxeo Connect**.
3. Remplissez les champs aussi pr&eacute;cis&eacute;ment que possible. Selon le type de ticket que vous cr&eacute;ez, les &eacute;l&eacute;ments suivants peuvent &ecirc;tre n&eacute;cessaires :

    * &eacute;tapes &agrave; suivre pour reproduire le probl&egrave;me,
    * copies d'&eacute;cran,
    * d&eacute;veloppement client,
    * description de l'environnement.
    Voir ci-dessous pour la description d&eacute;taill&eacute;e des champs disponibles.
4. Cliquez sur le bouton **Cr&eacute;er**.

{{! /multiexcerpt}}

**Champs disponibles sur un ticket JIRA**

Voici la liste des champs que vous devez renseigner, si possible, lorsque vous cr&eacute;ez un nouveau ticket [JIRA](https://fr.atlassian.com/software/jira). Les autres champs seront remplis par l'&eacute;quipe Support lors de l'analyse du ticket.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Champ</th><th colspan="1">Description</th></tr><tr><th colspan="2">Main fields</th></tr><tr><td colspan="1">Projet</td><td colspan="1">

S&eacute;lectionnez le projet Support Nuxeo Connect.
Voir le paragraphe [Projet](#field-project).

</td></tr><tr><td colspan="1">Type de demande</td><td colspan="1">

S&eacute;lectionnez quel type de ticket vous souhaitez cr&eacute;er et donc ce que vous souhaitez faire : poser une question, signaler une anomalie ou un probl&egrave;me, etc.
Voir le paragraphe [Type de demande](#field-issue-type).

</td></tr><tr><td colspan="1">

R&eacute;sum&eacute;

</td><td colspan="1">

Tapez une courte description du ticket.

</td></tr><tr><td colspan="1">

Descriptif

</td><td colspan="1">

Tapez la description d&eacute;taill&eacute;e de ce que vous essayez de faire. Si possible, indiquez les &eacute;tapes &agrave; suivre pour reproduire le comportement constat&eacute;.
Voir le paragraphe [Descriptif](#field-description).

</td></tr><tr><td colspan="1">Affecte la/les version(s)</td><td colspan="1">

S&eacute;lectionnez la version de la plateforme Nuxeo sur laquelle votre application est bas&eacute;e.
Voir le paragraphe [Versions](#field-affects-version).

</td></tr><tr><td colspan="1">

Criticit&eacute;

</td><td colspan="1">

S&eacute;lectionnez le niveau de criticit&eacute; de votre ticket.
Voir le paragraphe [Criticité](#field-severity).

</td></tr><tr><td colspan="1">Nuxeo Connect support</td><td colspan="1">

S&eacute;lectionnez le contrat Nuxeo Connect associ&eacute; &agrave; votre ticket. Pour les comptes associ&eacute;s &agrave; un seul contrat, un seul choix est disponible.
Voir le paragraphe [Nuxeo Connect support](#field-nuxeo-connect-support).

</td></tr><tr><td colspan="1">Instance type</td><td colspan="1">

S&eacute;lectionnez quel type d'instance est concern&eacute; par le ticket : une instance de d&eacute;veloppement, un serveur de production, etc.
Voir le paragraphe [Instance Type](#field-instance-type).

</td></tr><tr><th colspan="2">Advanced fields</th></tr><tr><td colspan="1">

Environnement

</td><td colspan="1">

Donnez autant d'informations que vous le pouvez sur votre environnement : configuration du serveur, y compris le syst&egrave;me d'exploitation et la base de donn&eacute;es, le navigateur, etc.
Voir le paragraphe [Environnement](#field-environment).

</td></tr><tr><td colspan="1">

Composants

</td><td colspan="1">

S&eacute;lectionnez la fonctionnalit&eacute; ou le composant de la plateforme Nuxeo qui est concern&eacute; par votre ticket.
Voir le paragraphe [Composants](#field-components).

</td></tr><tr><td colspan="1">

Additional Participant groups

</td><td colspan="1">

Si vous avez plusieurs utilisateurs Connect travaillant sur le m&ecirc;me projet, s&eacute;lectionnez votre groupe de support pour que les autres utilisateurs puissent recevoir des notifications sur le ticket et participer &agrave; son traitement si besoin est.
Voir le paragraphe [Additional Participant groups](#field-additional-participant-group).

</td></tr><tr><td colspan="1">

Reporter

</td><td colspan="1">

Ce champ est pr&eacute;-rempli avec votre nom d'utilisateur.

</td></tr><tr><td colspan="1">R&eacute;f&eacute;rence SFD</td><td colspan="1">Si vous avez des sp&eacute;cifications fonctionnelles, vous pouvez indiquez leur r&eacute;f&eacute;rence ici pour le reste de votre &eacute;quipe.</td></tr><tr><td colspan="1">Tags</td><td colspan="1">Tapez un mot-cl&eacute; qui peut vous aider &agrave; cat&eacute;goriser vos tickets.</td></tr></tbody></table></div>

## {{> anchor 'field-project'}}Projet

Toutes les demandes de support doivent &ecirc;tre faites dans la cat&eacute;gorie **Support Nuxeo Connect**. Si le ticket n'est pas cr&eacute;&eacute; dans la bonne cat&eacute;gorie, le ticket ne sera pas visible par l'&eacute;quipe du Support et ne recevra pas de r&eacute;ponse.

## {{> anchor 'field-issue-type'}}Type de demande

Ce champ indique le type d'incident li&eacute; au ticket cr&eacute;&eacute;. Les choix propos&eacute;s sont :

* [Question](#ticket-question): toute question autour de la plateforme Nuxeo,
* [Anomalie](#ticket-bug): probl&egrave;me li&eacute; &agrave; la plateforme Nuxeo,
* [Incident](#ticket-problem): probl&egrave;me li&eacute; &agrave; vos d&eacute;veloppements,
* [Amélioration](#ticket-improvement): demande d'am&eacute;liorations ou de nouvelles fonctionnalit&eacute;s, qui pourra faire l'objet d'une estimation, en vue d'une r&eacute;alisation au forfait.

Cette identification est importante pour fournir les &eacute;l&eacute;ments n&eacute;cessaires &agrave; la description du ticket, trait&eacute; au paragraphe [Description](#field-description).

## {{> anchor 'field-description'}}Descriptif

Le contenu de ce champ d&eacute;pend du [type de ticket](#field-issue-type) et est essentiel &agrave; son traitement. Vous devez donc le renseigner avec soin.

### {{> anchor 'ticket-question'}}Type Question

Vous devez essayer de d&eacute;crire pr&eacute;cis&eacute;ment quelle information vous recherchez ou ce que vous cherchez &agrave; accomplir, en indiquant le contexte de votre demande, afin que l'&eacute;quipe Support puisse vous fournir la r&eacute;ponse ad&eacute;quate.

En cas de question jug&eacute;e trop complexe ou trop d&eacute;pendante du contexte m&eacute;tier, l'&eacute;quipe de Support pourra vous orienter vers une prestation de consulting afin d'analyser plus pr&eacute;cis&eacute;ment votre besoin et fournir une r&eacute;ponse plus compl&egrave;te.

### {{> anchor 'ticket-bug'}}Type Anomalie

Dans un premier temps, vous devez v&eacute;rifier qu'il s'agit d'un bug de la plateforme Nuxeo et non d'un incident, c'est-&agrave;-dire un probl&egrave;me li&eacute; &agrave; vos d&eacute;veloppements. Pour cela, v&eacute;rifiez la reproductibilit&eacute; du sc&eacute;nario propos&eacute; sur une instance de la plateforme Nuxeo sur laquelle vos plugins ou personnalisations Studio ne sont pas installés.

Si l'anomalie n'est pas reproduite sur le site de d&eacute;mo&nbsp;:

* cela peut &ecirc;tre li&eacute; &agrave; un environnement diff&eacute;rent de la d&eacute;mo (sous Linux Ubuntu 64 bit et PostgreSQL 9.1). Dans ce cas, vous devrez pr&eacute;ciser ces diff&eacute;rences dans la [description de votre environnement](#field-environment)&nbsp;;
* il peut s'agit d'un probl&egrave;me introduit par vos d&eacute;veloppements. Dans ce cas, vous choisirez le [type « Incident »](#ticket-problem).

En cas de doute, il vaut mieux privil&eacute;gier le type &laquo; Incident &raquo; pour lequel vous devrez fournir plus de d&eacute;tails.

Si l'on se trouve dans le cas d'un bug, il est essentiel de fournir &agrave; l'&eacute;quipe de support un moyen de reproduction de l'anomalie. Vous devez donc indiquer :

* le sc&eacute;nario pas &agrave; pas pour reproduire le bug&nbsp;;
* puis les logs du serveur : vous pouvez essayer d'extraire la derni&egrave;re stacktrace dans la console ou le fichier server.log ou encore le message affich&eacute; dans l'interface web&nbsp;;
* et une capture d'&eacute;cran montrant l'interface web avant/apr&egrave;s si c'est pertinent pour le bug remont&eacute;.

Un seul de ces &eacute;l&eacute;ments peut suffire &agrave; l'identification de l'anomalie et &agrave; sa r&eacute;solution, mais mieux le ticket sera d&eacute;crit, plus il sera trait&eacute; rapidement et efficacement.

### {{> anchor 'ticket-problem'}}Type Incident

Cela concerne un probl&egrave;me directement li&eacute; aux d&eacute;veloppements du client. Dans ce cas, en plus des &eacute;l&eacute;ments &agrave; fournir pour une anomalie, vous devrez :

* fournir les plugins que vous avez d&eacute;velopp&eacute;s ET/OU les d&eacute;veloppements que vous pensez &ecirc;tre li&eacute;s &agrave; l'incident (classes Java, templates, tests unitaires, fichiers de configuration XML),
* identifier les derniers changements effectu&eacute;s sur la plateforme depuis le dernier moment o&ugrave; &ccedil;a fonctionnait.

Si vous travaillez avec Nuxeo Studio, il est probable que vous allez poursuivre votre travail de configuration pendant la r&eacute;solution du ticket : dans ce cas, il faut que Nuxeo puisse travailler sur une version fig&eacute;e du projet. Pour cela :

* attachez au ticket JIRA le plugin Studio (fichier .jar) en place au moment des tests,
* ou posez un tag dans Nuxeo Studio avec le nom du ticket JIRA que vous venez de cr&eacute;er.

En environnement de production, il est important d'identifier la date du probl&egrave;me, pour retrouver les erreurs correspondantes dans les logs.

### {{> anchor 'ticket-improvement'}}Type Am&eacute;lioration

Une am&eacute;lioration est un comportement qui n'est pas disponible dans la plateforme Nuxeo et que vous souhaiteriez voir impl&eacute;menter. Un ticket de type Am&eacute;lioration vous permet de demander &agrave; l'&eacute;quipe Nuxeo si une nouvelle fonctionnalit&eacute; pourrait &ecirc;tre r&eacute;alis&eacute;. Pour ce type de ticket, seule le descriptif est n&eacute;cessaire, dans lequel vous devez d&eacute;crire le comportement souhait&eacute;.

## {{> anchor 'field-affects-version'}}Versions

Le client doit indiquer quelle version principale de la plateforme Nuxeo il utilise (5.5, 5.6, 5.8), ind&eacute;pendamment des hotfixes install&eacute;s (ce qui sera pr&eacute;cis&eacute; dans l'environnement).

## {{> anchor 'field-severity'}}Criticit&eacute;

Le client indique ici le niveau de criticit&eacute; du ticket cr&eacute;&eacute; :

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

**Niveau de gravit&eacute;**

</th><th colspan="1">

**D&eacute;finitions de gravit&eacute; NUXEO pour un Entrep&ocirc;t Documentaire Nuxeo en production**

</th><th colspan="1">

**D&eacute;finitions de gravit&eacute; NUXEO pour un Entrep&ocirc;t Documentaire Nuxeo en environnement de d&eacute;veloppement**

</th></tr><tr><td colspan="1">

1\. Bloquant (Blocker)

</td><td colspan="1">

Probl&egrave;me de production catastrophique ayant des impacts tr&egrave;s importants sur vos syst&egrave;mes de production, perte des donn&eacute;es li&eacute;es &agrave; la production et absence de proc&eacute;dure de r&eacute;solution. Les probl&egrave;mes de gravit&eacute; 1 incluent &eacute;galement les violations de s&eacute;curit&eacute;.

</td><td colspan="1">

Probl&egrave;me critique de blocage, emp&ecirc;chant l'avancement de tout d&eacute;veloppement.

</td></tr><tr><td colspan="1">

2\. Critique (Critical)

</td><td colspan="1">

Probl&egrave;me ayant un impact &eacute;lev&eacute;, dans lequel l'exploitation de votre application est perturb&eacute;e, mais vous avez la capacit&eacute; de rester productif et de maintenir les op&eacute;rations commerciales &agrave; un niveau suffisant.

</td><td colspan="1">

Tout probl&egrave;me rendant l'utilisation ou l'utilisation continue d'une ou plusieurs fonctionnalit&eacute;s de la Plateforme Nuxeo difficile quant au d&eacute;veloppement, ayant un impact significatif sur l'&eacute;tat d'avancement des projets de logiciels, et ne pouvant raisonnablement &ecirc;tre contourn&eacute;e ou &eacute;vit&eacute;e de fa&ccedil;on temporaire sans y consacrer beaucoup de temps et/ou d'efforts.

</td></tr><tr><td colspan="1">

3\. Majeur

(Major)

</td><td colspan="1">

Probl&egrave;me ayant un impact moyen &agrave; faible, qui implique une perte partielle et non critique d&rsquo;une fonctionnalit&eacute; touchant certaines op&eacute;rations, mais vous permettant de continuer l&rsquo;exploitation.

</td><td colspan="1">

Requ&ecirc;tes g&eacute;n&eacute;rales relatives &agrave; l'utilisation et/ou &agrave; la mise en &oelig;uvre de la Plateforme Nuxeo qui ne sont pas class&eacute;es dans la cat&eacute;gorie probl&egrave;me de gravit&eacute; 2.

</td></tr><tr><td colspan="1">

4\. Mineur

(Minor)

</td><td colspan="1">

Probl&egrave;me d&rsquo;affichage ou de traduction, questions d'utilisation g&eacute;n&eacute;rale, recommandations pour l'am&eacute;lioration future de produits ou modifications. Aucun impact sur la qualit&eacute;, les performances ou les fonctionnalit&eacute;s de la Plateforme Nuxeo.

</td><td colspan="1">

Non applicable

</td></tr><tr><td colspan="1">5\. Cosm&eacute;tique (Detail)</td><td colspan="1">D&eacute;tail n'ayant pas d'incidence sur le fonctionnement de l'application (libell&eacute;, style, etc.).</td><td colspan="1">D&eacute;tail n'ayant pas d'incidence sur le fonctionnement de l'application (libell&eacute;, style, etc.).</td></tr></tbody></table></div>

La criticit&eacute; ne d&eacute;pend pas de crit&egrave;res de priorisation mais uniquement des termes pr&eacute;cis&eacute;s ci-dessus.

Le d&eacute;tail des d&eacute;lais de r&eacute;ponse et de r&eacute;solution en fonction de la SLA (Service Level Agreement : garantie du niveau de service) est pr&eacute;sent&eacute;e sur cette page : [http://www.nuxeo.com/fr/produits/support/](http://www.nuxeo.com/fr/produits/support/).

## {{> anchor 'field-nuxeo-connect-support'}}Nuxeo Connect support

Ce champ sous forme de liste d&eacute;roulante permet de faire le lien entre le ticket JIRA et le contrat Connect. Apr&egrave;s sa s&eacute;lection, l'&eacute;quipe de support disposera de quelques informations sur l'application du client (version de Nuxeo, syst&egrave;me d'exploitation, base de donn&eacute;es), ayant ainsi un rapide aper&ccedil;u de l'environnement dans lequel est d&eacute;ploy&eacute; la plateforme Nuxeo.

Pour les comptes associ&eacute;s &agrave; un seul contrat, un seul choix est disponible. Pour les autres, il faut prendre soin de choisir le bon projet.

## {{> anchor 'field-instance-type'}}Instance type

Ce champ permet &agrave; l'&eacute;quipe de support de conna&icirc;tre les &eacute;ventuelles contraintes li&eacute;es au type d'instance. Ceci peut avoir une influence sur les recommandations qui vous seront donn&eacute;es.

Les diff&eacute;rents types d'instance sont :

* Development : le sujet du ticket porte sur un environnement de d&eacute;veloppement. Certains crit&egrave;res, comme la conservation des donn&eacute;es, peuvent &ecirc;tre consid&eacute;r&eacute;es comme non critiques sur une instance de d&eacute;veloppement.
* Testing/QA : le sujet du ticket porte sur un environnement de test, qui a g&eacute;n&eacute;ralement un nombre limit&eacute; d'utilisateurs.
* Production : le sujet du ticket porte sur un environnement de production. L'&eacute;quipe de support peut &ecirc;tre amen&eacute;e &agrave; proposer une solution de contournement dans un premier temps, afin de d&eacute;bloquer les utilisateurs rapidement, sans attendre de solution &agrave; long terme, qui peut &ecirc;tre plus longue &agrave; mettre en place. L'&eacute;quipe de support peut &eacute;galement vous proposer un appel t&eacute;l&eacute;phonique afin d'obtenir plus d'informations rapidement.

## {{> anchor 'field-environment'}}Environnement

Dans le cas d'un bug ou d'un probl&egrave;me, il est important de pr&eacute;ciser l'environnement.

A partir de Nuxeo Platform 5.6, le plus simple est de fournir le r&eacute;sultat de la commande `showconf`, qui donne un r&eacute;sum&eacute; de la configuration (nuxeo.conf et packages) en obfusquant les mots de passe.

* Sous Linux:

    ```
    # ./nuxeoctl showconf
    ```

* Sous MS Windows:

    ```
    > nuxeoctl.bat showconf
    ```

En plus de ces donn&eacute;es, il peut &ecirc;tre int&eacute;ressant de pr&eacute;ciser les informations suivantes afin que Nuxeo connaisse exactement l'&eacute;tat de votre serveur :

* syst&egrave;me d'exploitation (Redhat EL 5.4 64 bits, Windows 2003 SP2 32 bits, &hellip;) du serveur et du poste client ;
* navigateur (IE8, Firefox 17, Chrome 23, etc &hellip;) : important pour les probl&egrave;mes li&eacute;s aux postes client ;
* base de donn&eacute;es utilis&eacute;e (PostgreSQL 9.1, Oracle 11g, etc &hellip;) ;
* packages additionnels install&eacute;s ;
* serveur d'application (Tomcat par d&eacute;faut, ou JBoss) ;
* niveau de hotfix install&eacute;.

## {{> anchor 'field-components'}}Composants

Parmi les champs additionnels se trouve le choix des composants sur lesquels porte le ticket. Le client peut essayer de le renseigner &agrave; partir de la liste &agrave; choix multiple. Dans le cas contraire, l'&eacute;quipe de support le fera.

Ce champ est principalement utilis&eacute; &agrave; des fins statistiques, pour conna&icirc;tre les composants qui ont besoin du plus d'attention pour les prochains d&eacute;veloppements.

## {{> anchor 'field-additional-participant-group'}} <label for="customfield_10140">Additional Participant groups</label>

Ce champ permet de partager un ticket avec un groupe d'utilisateurs. Cette fonctionnalit&eacute; est principalement utilis&eacute;e pour les clients disposant de plusieurs comptes.

Le nom du groupe &agrave; renseigner fait partie des groupes de l'utilisateur, consultable sur son profil ([https://jira.nuxeo.com/secure/ViewProfile.jspa](https://jira.nuxeo.com/secure/ViewProfile.jspa)) et habituellement de la forme &laquo; support-NOMDEMASOCIETE &raquo;.

## Autres recommandations

Quelques conseils pour am&eacute;liorer la qualit&eacute; du ticket :

* &Eacute;viter de d&eacute;crire le ticket dans un fichier .doc ou .docx, pour que le ticket soit enti&egrave;rement lisible quelque soit le media utilis&eacute; pour sa consultation (navigation sur smartphone, application pour smartphone, tablette, navigation classique sur PC).
* Ne pas coller des centaines de lignes de logs dans un commentaire et pr&eacute;f&eacute;rer l'attachement des logs en pi&egrave;ce jointe si la trace fait plus d'une vingtaine de lignes.
* Pour les utilisateurs avanc&eacute;s, ne pas h&eacute;siter &agrave; utiliser les possibilit&eacute;s de formatage offertes par JIRA pour mettre en valeur la description :
    * texte format&eacute;,
    * code source,
    * lien,
    * puces.

* * *

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Pages connexes'}}

- [Comment interagir avec un ticket]({{page space='connect' page='comment-interagir-avec-un-ticket'}})
- [Suivi des tickets client]({{page space='connect' page='suivi-des-tickets-client'}})
- [G&eacute;rer vos tickets de support]({{page space='connect' page='gandeacuterer-vos-tickets-de-support'}})

{{/panel}}
</div>
<div class="column medium-6"></div>
</div>
