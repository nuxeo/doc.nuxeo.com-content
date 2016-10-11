---
title: Comment interagir avec un ticket
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
    canonical: Comment+interagir+avec+un+ticket
    canonical_source: 'https://doc.nuxeo.com/display/Studio/Comment+interagir+avec+un+ticket'
    page_id: '18448716'
    shortlink: TIEZAQ
    shortlink_source: 'https://doc.nuxeo.com/x/TIEZAQ'
    source_link: /display/Studio/Comment+interagir+avec+un+ticket
tree_item_index: 200
history:
    -
        author: Solen Guitter
        date: '2014-12-30 16:57'
        message: ''
        version: '4'
    -
        author: Solen Guitter
        date: '2014-01-03 14:59'
        message: ''
        version: '3'
    -
        author: Solen Guitter
        date: '2014-01-03 14:55'
        message: ''
        version: '2'
    -
        author: Solen Guitter
        date: '2014-01-03 14:37'
        message: ''
        version: '1'

---
Voici une repr&eacute;sentation simplifi&eacute;e du workflow de traitement d'un ticket :

![]({{file name='workflow_fr.png'}} ?w=400,border=true)

Tout au long du traitement du ticket, celui-ci sera assign&eacute; &agrave; une personne de Nuxeo, en charge de fournir les r&eacute;ponses.

## &Eacute;tat Ouvert

Il s'agit de l'&eacute;tat initial du ticket. Cela indique &agrave; l'&eacute;quipe de Support qu'elle doit prendre en charge le ticket. A partir de cet &eacute;tat, plusieurs actions sont possibles, qui vont amener le ticket dans un nouvel &eacute;tat.

Apr&egrave;s une premi&egrave;re analyse, l'&eacute;quipe de Support va passer le ticket dans l'un des &eacute;tats suivants :

*   &laquo; En cours &raquo;, indiquant que le probl&egrave;me remont&eacute; est reproduit et que le ticket est en cours de traitement ;
*   &laquo; Acknowledged &raquo;, pour indiquer que le probl&egrave;me a bien &eacute;t&eacute; constat&eacute;, que tous les &eacute;l&eacute;ments n&eacute;cessaires au traitement sont pr&eacute;sents et signaler que la r&eacute;solution aura lieu ult&eacute;rieurement (escalade) ;
*   &laquo; En attente de feedback &raquo;, quand le support a pos&eacute; des questions compl&eacute;mentaires pour mieux comprendre les questions ou probl&egrave;mes remont&eacute;s ;
*   &laquo; R&eacute;solu &raquo; quand le support fournit une r&eacute;ponse consid&eacute;r&eacute;e comme satisfaisante.

## &Eacute;tat En attente de feedback

Cet &eacute;tat indique que l'&eacute;quipe de Support est en attente d'une action de votre part, suite aux questions qui ont &eacute;t&eacute; pos&eacute;es :

*   si vous fournissez toutes les r&eacute;ponses aux questions pos&eacute;es par l'&eacute;quipe de Support, vous devez activer le bouton &laquo; Give Feedback &raquo; pour que le ticket retourne sous la surveillance du support ;
*   si vous ne fournissez qu'une r&eacute;ponse partielle ou bien si vous indiquez que vous allez continuer votre investigation, le ticket doit rester dans l'&eacute;tat &laquo; En attente de feedback &raquo; jusqu'&agrave; la fourniture de tous les &eacute;l&eacute;ments n&eacute;cessaires &agrave; la poursuite du traitement ;
*   dernier cas, il se peut que les questions du support vous aiguille vers une solution : dans ce cas, vous devez directement fermer le ticket avec un commentaire.

Comme conclusion, ne pas activer le bouton &laquo; Give Feedback &raquo; tant que tous les &eacute;l&eacute;ments de r&eacute;ponse n'ont pas &eacute;t&eacute; fournis.

## &Eacute;tat R&eacute;solu

Quand le Support a r&eacute;pondu &agrave; la question initialement pos&eacute;e ou fourni une correction pour une anomalie, il marque le ticket comme r&eacute;solu. C'est alors au client d'intervenir :

*   Si la r&eacute;ponse fournie n'est pas satisfaisante ou ne corrige pas le probl&egrave;me, vous devez rouvrir le ticket en pr&eacute;cisant ce qui ne convient pas.
*   Si vous validez la solution propos&eacute;e, vous devez fermer la demande.

Quand vous avez valid&eacute; la r&eacute;ponse propos&eacute;e, le ticket ne doit pas &ecirc;tre utilis&eacute; pour poser de nouvelles questions et soumettre de nouvelles anomalies, ni rouvrir la demande. Il reste ferm&eacute; et les nouvelles demandes doivent faire l'objet d'un nouveau ticket afin que le ticket ne traite que d'un sujet unique.

Vous pourrez toutefois demander un court compl&eacute;ment de r&eacute;ponse en commentaire, et ce sans rouvrir le ticket.

&nbsp;

* * *

&nbsp;

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Pages connexes'}}

*   [Comment remplir un ticket Jira]({{page space='connect' page='comment-remplir-un-ticket-jira'}})
*   [Suivi des tickets client]({{page space='connect' page='suivi-des-tickets-client'}})
*   [Gérer vos tickets de support]({{page space='connect' page='gandeacuterer-vos-tickets-de-support'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
