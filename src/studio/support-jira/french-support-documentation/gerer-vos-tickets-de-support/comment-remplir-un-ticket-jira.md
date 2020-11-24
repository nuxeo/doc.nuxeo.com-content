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

Suivre les recommandations décrites ci-dessous permettra d'avoir un délai de traitement de vos tickets plus rapide. D'autre part, les tickets peuvent être rédigés indifféremment en fran&ccedil;ais ou en anglais.

{{/callout}}

L'écran de création est composé de deux parties : le premier onglet, **Main fields**, présente les principaux champs à renseigner (titre, description, criticité , version), tandis que le second, **Advanced fields**, propose les champs optionnels ou de moindre importance pour la résolution du ticket.

{{#> callout type='info' }}

Un ticket doit correspondre à un problème. N'hésitez pas à créer un autre ticket pour signaler un autre incident.

{{/callout}}

**Pour créer un ticket JIRA :**

{{! multiexcerpt name='jira-ticket-creation-steps'}}
1. Dans JIRA, cliquez sur le bouton **Créer une demande**.
1. Sélectionnez le projet **Support Nuxeo Connect**.
1. Remplissez les champs aussi précisément que possible. Selon le type de ticket que vous créez, les éléments suivants peuvent être nécessaires :
  - étapes à suivre pour reproduire le problème,
  - copies d'écran,
  - développement client,
  - description de l'environnement.
    Voir ci-dessous pour la description détaillée des champs disponibles.

1. Cliquez sur le bouton **Créer**.
{{! /multiexcerpt}}

**Champs disponibles sur un ticket JIRA**

Voici la liste des champs que vous devez renseigner, si possible, lorsque vous créez un nouveau ticket [JIRA](https://fr.atlassian.com/software/jira). Les autres champs seront remplis par l'équipe Support lors de l'analyse du ticket.

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">Champ</th><th colspan="1">Description</th></tr><tr><th colspan="2">Main fields</th></tr><tr><td colspan="1">Projet</td><td colspan="1">

Sélectionnez le projet Support Nuxeo Connect.
Voir le paragraphe [Projet](#field-project).

</td></tr><tr><td colspan="1">Type de demande</td><td colspan="1">

Sélectionnez quel type de ticket vous souhaitez créer et donc ce que vous souhaitez faire&nbsp;: poser une question, signaler une anomalie ou un problème, etc.
Voir le paragraphe [Type de demande](#field-issue-type).

</td></tr><tr><td colspan="1">

Résumé

</td><td colspan="1">

Tapez une courte description du ticket.

</td></tr><tr><td colspan="1">

Descriptif

</td><td colspan="1">

Tapez la description détaillée de ce que vous essayez de faire. Si possible, indiquez les étapes à suivre pour reproduire le comportement constaté.
Voir le paragraphe [Descriptif](#field-description).

</td></tr><tr><td colspan="1">Affecte la/les version(s)</td><td colspan="1">

Sélectionnez la version de la plateforme Nuxeo sur laquelle votre application est basée.
Voir le paragraphe [Versions](#field-affects-version).

</td></tr><tr><td colspan="1">

Criticité

</td><td colspan="1">

Sélectionnez le niveau de criticité de votre ticket.
Voir le paragraphe [Criticité](#field-severity).

</td></tr><tr><td colspan="1">Nuxeo Connect support</td><td colspan="1">

Sélectionnez le contrat Nuxeo Connect associé à votre ticket. Pour les comptes associés à un seul contrat, un seul choix est disponible.
Voir le paragraphe [Nuxeo Connect support](#field-nuxeo-connect-support).

</td></tr><tr><td colspan="1">Instance type</td><td colspan="1">

Sélectionnez quel type d'instance est concerné par le ticket&nbsp;: une instance de développement, un serveur de production, etc.
Voir le paragraphe [Instance Type](#field-instance-type).

</td></tr><tr><th colspan="2">Advanced fields</th></tr><tr><td colspan="1">

Environnement

</td><td colspan="1">

Donnez autant d'informations que vous le pouvez sur votre environnement&nbsp;: configuration du serveur, y compris le système d'exploitation et la base de données, le navigateur, etc.
Voir le paragraphe [Environnement](#field-environment).

</td></tr><tr><td colspan="1">

Composants

</td><td colspan="1">

Sélectionnez la fonctionnalité ou le composant de la plateforme Nuxeo qui est concerné par votre ticket.
Voir le paragraphe [Composants](#field-components).

</td></tr><tr><td colspan="1">

Additional Participant groups

</td><td colspan="1">

Si vous avez plusieurs utilisateurs Connect travaillant sur le même projet, sélectionnez votre groupe de support pour que les autres utilisateurs puissent recevoir des notifications sur le ticket et participer à son traitement si besoin est.
Voir le paragraphe [Additional Participant groups](#field-additional-participant-group).

</td></tr>
<tr>
<td>Additional Readonly Groups</td>
<td>Si vous souhaitez ajouter des utilisateurs qui ont besoin de suivre l'état des tickets sans en créer ou modifier eux-mêmes, sélectionnez le groupe "read-only" associé à votre groupe de support.
Voir le paragraphe [Additional Readonly Groups](#field-additional-read-only-group).</td>
</tr>

<tr><td colspan="1">

Reporter

</td><td colspan="1">

Ce champ est pré-rempli avec votre nom d'utilisateur.

</td></tr><tr><td colspan="1">Référence SFD</td><td colspan="1">Si vous avez des spécifications fonctionnelles, vous pouvez indiquez leur référence ici pour le reste de votre équipe.</td></tr><tr><td colspan="1">Tags</td><td colspan="1">Tapez un mot-clé qui peut vous aider à catégoriser vos tickets.</td></tr></tbody></table></div>

## Projet {{> anchor 'field-project'}}

Toutes les demandes de support doivent être faites dans la catégorie **Support Nuxeo Connect**. Si le ticket n'est pas créé dans la bonne catégorie, le ticket ne sera pas visible par l'équipe du Support et ne recevra pas de réponse.

## Type de demande {{> anchor 'field-issue-type'}}

Ce champ indique le type d'incident lié au ticket créé. Les choix proposés sont :

* [Question](#ticket-question): toute question autour de la plateforme Nuxeo,
* [Anomalie](#ticket-bug): problème lié à la plateforme Nuxeo,
* [Incident](#ticket-problem): problème lié à vos développements,
* [Amélioration](#ticket-improvement): demande d'améliorations ou de nouvelles fonctionnalités, qui pourra faire l'objet d'une estimation, en vue d'une réalisation au forfait.

Cette identification est importante pour fournir les éléments nécessaires à la description du ticket, traité au paragraphe [Description](#field-description).

## Descriptif {{> anchor 'field-description'}}

Le contenu de ce champ dépend du [type de ticket](#field-issue-type) et est essentiel à son traitement. Vous devez donc le renseigner avec soin.

### {{> anchor 'ticket-question'}}Type Question

Vous devez essayer de décrire précisément quelle information vous recherchez ou ce que vous cherchez à accomplir, en indiquant le contexte de votre demande, afin que l'équipe Support puisse vous fournir la réponse adéquate.

En cas de question jugée trop complexe ou trop dépendante du contexte métier, l'équipe de Support pourra vous orienter vers une prestation de consulting afin d'analyser plus précisément votre besoin et fournir une réponse plus complète.

### {{> anchor 'ticket-bug'}}Type Anomalie

Dans un premier temps, vous devez vérifier qu'il s'agit d'un bug de la plateforme Nuxeo et non d'un incident, c'est-à-dire un problème lié à vos développements. Pour cela, vérifiez la reproductibilité du scénario proposé sur une instance de la plateforme Nuxeo sur laquelle vos plugins ou personnalisations Studio ne sont pas installés.

Si l'anomalie n'est pas reproduite sur le site de démo&nbsp;:

* cela peut être lié à un environnement différent de la démo (sous Linux Ubuntu 64 bit et PostgreSQL 9.1). Dans ce cas, vous devrez préciser ces différences dans la [description de votre environnement](#field-environment)&nbsp;;
* il peut s'agit d'un problème introduit par vos développements. Dans ce cas, vous choisirez le [type « Incident »](#ticket-problem).

En cas de doute, il vaut mieux privilégier le type &laquo; Incident &raquo; pour lequel vous devrez fournir plus de détails.

Si l'on se trouve dans le cas d'un bug, il est essentiel de fournir à l'équipe de support un moyen de reproduction de l'anomalie. Vous devez donc indiquer&nbsp;:

* le scénario pas à pas pour reproduire le bug&nbsp;;
* puis les logs du serveur&nbsp;: vous pouvez essayer d'extraire la dernière stacktrace dans la console ou le fichier server.log ou encore le message affiché dans l'interface web&nbsp;;
* et une capture d'écran montrant l'interface web avant/après si c'est pertinent pour le bug remonté.

Un seul de ces éléments peut suffire à l'identification de l'anomalie et à sa résolution, mais mieux le ticket sera décrit, plus il sera traité rapidement et efficacement.

### {{> anchor 'ticket-problem'}}Type Incident

Cela concerne un problème directement lié aux développements du client. Dans ce cas, en plus des éléments à fournir pour une anomalie, vous devrez&nbsp;:

* fournir les plugins que vous avez développés ET/OU les développements que vous pensez être liés à l'incident (classes Java, templates, tests unitaires, fichiers de configuration XML),
* identifier les derniers changements effectués sur la plateforme depuis le dernier moment o&ugrave; &ccedil;a fonctionnait.

Si vous travaillez avec Nuxeo Studio, il est probable que vous allez poursuivre votre travail de configuration pendant la résolution du ticket&nbsp;: dans ce cas, il faut que Nuxeo puisse travailler sur une version figée du projet. Pour cela&nbsp;:

* attachez au ticket JIRA le plugin Studio (fichier .jar) en place au moment des tests,
* ou posez un tag dans Nuxeo Studio avec le nom du ticket JIRA que vous venez de créer.

En environnement de production, il est important d'identifier la date du problème, pour retrouver les erreurs correspondantes dans les logs.

### {{> anchor 'ticket-improvement'}}Type Amélioration

Une amélioration est un comportement qui n'est pas disponible dans la plateforme Nuxeo et que vous souhaiteriez voir implémenter. Un ticket de type Amélioration vous permet de demander à l'équipe Nuxeo si une nouvelle fonctionnalité pourrait être réalisé. Pour ce type de ticket, seule le descriptif est nécessaire, dans lequel vous devez décrire le comportement souhaité.

## {{> anchor 'field-affects-version'}}Versions

Le client doit indiquer quelle version principale de la plateforme Nuxeo il utilise (6.0, 7.10, etc.), indépendamment des hotfixes installés (ce qui sera précisé dans l'environnement).

## {{> anchor 'field-severity'}}Criticité

Le client indique ici le niveau de criticité du ticket créé&nbsp;:

<div class="table-scroll"><table class="hover"><tbody><tr><th colspan="1">

**Niveau de gravité**

</th><th colspan="1">

**Définitions de gravité NUXEO pour un Entrep&ocirc;t Documentaire Nuxeo en production**

</th><th colspan="1">

**Définitions de gravité NUXEO pour un Entrep&ocirc;t Documentaire Nuxeo en environnement de développement**

</th></tr><tr><td colspan="1">

1\. Bloquant (Blocker)

</td><td colspan="1">

Problème de production catastrophique ayant des impacts très importants sur vos systèmes de production, perte des données liées à la production et absence de procédure de résolution. Les problèmes de gravité 1 incluent également les violations de sécurité.

</td><td colspan="1">

Problème critique de blocage, empêchant l'avancement de tout développement.

</td></tr><tr><td colspan="1">

2\. Critique (Critical)

</td><td colspan="1">

Problème ayant un impact élevé, dans lequel l'exploitation de votre application est perturbée, mais vous avez la capacité de rester productif et de maintenir les opérations commerciales à un niveau suffisant.

</td><td colspan="1">

Tout problème rendant l'utilisation ou l'utilisation continue d'une ou plusieurs fonctionnalités de la Plateforme Nuxeo difficile quant au développement, ayant un impact significatif sur l'état d'avancement des projets de logiciels, et ne pouvant raisonnablement être contournée ou évitée de fa&ccedil;on temporaire sans y consacrer beaucoup de temps et/ou d'efforts.

</td></tr><tr><td colspan="1">

3\. Majeur

(Major)

</td><td colspan="1">

Problème ayant un impact moyen à faible, qui implique une perte partielle et non critique d&rsquo;une fonctionnalité touchant certaines opérations, mais vous permettant de continuer l&rsquo;exploitation.

</td><td colspan="1">

Requêtes générales relatives à l'utilisation et/ou à la mise en &oelig;uvre de la Plateforme Nuxeo qui ne sont pas classées dans la catégorie problème de gravité 2.

</td></tr><tr><td colspan="1">

4\. Mineur

(Minor)

</td><td colspan="1">

Problème d&rsquo;affichage ou de traduction, questions d'utilisation générale, recommandations pour l'amélioration future de produits ou modifications. Aucun impact sur la qualité, les performances ou les fonctionnalités de la Plateforme Nuxeo.

</td><td colspan="1">

Non applicable

</td></tr><tr><td colspan="1">5\. Cosmétique (Detail)</td><td colspan="1">Détail n'ayant pas d'incidence sur le fonctionnement de l'application (libellé, style, etc.).</td><td colspan="1">Détail n'ayant pas d'incidence sur le fonctionnement de l'application (libellé, style, etc.).</td></tr></tbody></table></div>

La criticité ne dépend pas de critères de priorisation mais uniquement des termes précisés ci-dessus.

Le détail des délais de réponse et de résolution en fonction de la SLA (Service Level Agreement&nbsp;: garantie du niveau de service) est présentée sur cette page&nbsp;: [http://www.nuxeo.com/fr/produits/support/](http://www.nuxeo.com/fr/produits/support/).

## {{> anchor 'field-nuxeo-connect-support'}}Nuxeo Connect support

Ce champ sous forme de liste déroulante permet de faire le lien entre le ticket JIRA et le contrat Connect. Après sa sélection, l'équipe de support disposera de quelques informations sur l'application du client (version de Nuxeo, système d'exploitation, base de données), ayant ainsi un rapide aper&ccedil;u de l'environnement dans lequel est déployé la plateforme Nuxeo.

Pour les comptes associés à un seul contrat, un seul choix est disponible. Pour les autres, il faut prendre soin de choisir le bon projet.

## {{> anchor 'field-instance-type'}}Instance type

Ce champ permet à l'équipe de support de conna&icirc;tre les éventuelles contraintes liées au type d'instance. Ceci peut avoir une influence sur les recommandations qui vous seront données.

Les différents types d'instance sont&nbsp;:

* Development&nbsp;: le sujet du ticket porte sur un environnement de développement. Certains critères, comme la conservation des données, peuvent être considérées comme non critiques sur une instance de développement.
* Testing/QA&nbsp;: le sujet du ticket porte sur un environnement de test, qui a généralement un nombre limité d'utilisateurs.
* Production&nbsp;: le sujet du ticket porte sur un environnement de production. L'équipe de support peut être amenée à proposer une solution de contournement dans un premier temps, afin de débloquer les utilisateurs rapidement, sans attendre de solution à long terme, qui peut être plus longue à mettre en place. L'équipe de support peut également vous proposer un appel téléphonique afin d'obtenir plus d'informations rapidement.

## {{> anchor 'field-environment'}}Environnement

Dans le cas d'un bug ou d'un problème, il est important de préciser l'environnement.

A partir de Nuxeo Platform 5.6, le plus simple est de fournir le résultat de la commande `showconf`, qui donne un résumé de la configuration (nuxeo.conf et packages) en obfusquant les mots de passe.

* Sous Linux:

    ```
    # ./nuxeoctl showconf
    ```

* Sous MS Windows:

    ```
    > nuxeoctl.bat showconf
    ```

En plus de ces données, il peut être intéressant de préciser les informations suivantes afin que Nuxeo connaisse exactement l'état de votre serveur&nbsp;:

* système d'exploitation (Redhat EL 5.4 64 bits, Windows 2003 SP2 32 bits, &hellip;) du serveur et du poste client&nbsp;;
* navigateur (IE8, Firefox 17, Chrome 23, etc &hellip;)&nbsp;: important pour les problèmes liés aux postes client&nbsp;;
* base de données utilisée (PostgreSQL 9.1, Oracle 11g, etc &hellip;)&nbsp;;
* packages additionnels installés&nbsp;;
* serveur d'application (Tomcat par défaut, ou JBoss)&nbsp;;
* niveau de hotfix installé.

## {{> anchor 'field-components'}}Composants

Parmi les champs additionnels se trouve le choix des composants sur lesquels porte le ticket. Le client peut essayer de le renseigner à partir de la liste à choix multiple. Dans le cas contraire, l'équipe de support le fera.

Ce champ est principalement utilisé à des fins statistiques, pour conna&icirc;tre les composants qui ont besoin du plus d'attention pour les prochains développements.

## {{> anchor 'field-additional-participant-group'}} Additional Participant groups

Ce champ permet de partager un ticket avec un groupe d'utilisateurs. Cette fonctionnalité est principalement utilisée pour les clients disposant de plusieurs comptes.

Le nom du groupe à renseigner fait partie des groupes de l'utilisateur, consultable sur son profil ([https://jira.nuxeo.com/secure/ViewProfile.jspa](https://jira.nuxeo.com/secure/ViewProfile.jspa)) et habituellement de la forme &laquo;&nbsp;support-NOMDEMASOCIETE&nbsp;&raquo;.

## {{> anchor 'field-additional-read-only-group'}} Additional Readonly Groups

Ce champ permet de partager en lecture seule un ticket avec un groupe d'utilisateurs. Par exemple avec des responsables d'équipe qui ont besoin de pouvoir prendre connaissance des points remontés au support sans pour autant ouvrir ou modifier des tickets.

Les groupes read-only ne sont disponibles que pour les contrats le précisant. Le nom du groupe est habituellement de la forme &laquo;&nbsp;support-ro-NOMDEMASOCIETE&nbsp;&raquo;.

## Autres recommandations

Quelques conseils pour améliorer la qualité du ticket&nbsp;:

* éviter de décrire le ticket dans un fichier .doc ou .docx, pour que le ticket soit entièrement lisible quelque soit le media utilisé pour sa consultation (navigation sur smartphone, application pour smartphone, tablette, navigation classique sur PC).
* Ne pas coller des centaines de lignes de logs dans un commentaire et préférer l'attachement des logs en pièce jointe si la trace fait plus d'une vingtaine de lignes.
* Pour les utilisateurs avancés, ne pas hésiter à utiliser les possibilités de formatage offertes par JIRA pour mettre en valeur la description&nbsp;:
    * texte formaté,
    * code source,
    * lien,
    * puces.

<div class="row" data-equalizer data-equalize-on="medium">
<div class="column medium-6">
{{#> panel heading='Pages connexes'}}

- [Comment interagir avec un ticket]({{page page='comment-interagir-avec-un-ticket'}})
- [Suivi des tickets client]({{page page='suivi-des-tickets-client'}})
- [Gérer vos tickets de support]({{page page='gerer-vos-tickets-de-support'}})

{{/panel}}
</div>
<div class="column medium-6"></div>
</div>
