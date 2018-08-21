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
Voici une représentation simplifiée du workflow de traitement d'un ticket :

![]({{file name='workflow_fr.png'}} ?w=400,border=true)

Tout au long du traitement du ticket, celui-ci sera assigné à une personne de Nuxeo, en charge de fournir les réponses.

## État Ouvert

Il s'agit de l'état initial du ticket. Cela indique à l'équipe de Support qu'elle doit prendre en charge le ticket. A partir de cet état, plusieurs actions sont possibles, qui vont amener le ticket dans un nouvel état.

Après une première analyse, l'équipe de Support va passer le ticket dans l'un des états suivants :

- **En cours**, indiquant que le problème remonté est reproduit et que le ticket est en cours de traitement ;
- **Acknowledged**, pour indiquer que le problème a bien été constaté, que tous les éléments nécessaires au traitement sont présents et signaler que la résolution aura lieu ultérieurement (escalade) ;
- **En attente de feedback**, quand le support a posé des questions complémentaires pour mieux comprendre les questions ou problèmes remontés ;
- **Résolu**, quand le support fournit une réponse considérée comme satisfaisante.

## État En attente de feedback

Cet état indique que l'équipe de Support est en attente d'une action de votre part, suite aux questions qui ont été posées :

- Si vous fournissez toutes les réponses aux questions posées par l'équipe de Support, vous devez activer le bouton "Give Feedback" (seulement visible dans l'état "Feedback required") pour que le ticket retourne sous la surveillance du support ;
- Si vous ne fournissez qu'une réponse partielle ou bien si vous indiquez que vous allez continuer votre investigation, le ticket doit rester dans l'état "En attente de feedback" jusqu'à la fourniture de tous les éléments nécessaires à la poursuite du traitement ;
- Dernier cas, il se peut que les questions du support vous aiguille vers une solution : dans ce cas, vous devez directement fermer le ticket avec un commentaire.

Comme conclusion, ne pas activer le bouton "Give Feedback" tant que tous les éléments de réponse n'ont pas été fournis.

## État Résolu

Quand le Support a répondu à la question initialement posée ou fourni une correction pour une anomalie, il marque le ticket comme résolu. C'est alors au client d'intervenir :

- Si la réponse fournie n'est pas satisfaisante ou ne corrige pas le problème, vous devez rouvrir le ticket en précisant ce qui ne convient pas.
- Si vous validez la solution proposée, vous devez fermer la demande.

Quand vous avez validé la réponse proposée, le ticket ne doit pas être utilisé pour poser de nouvelles questions et soumettre de nouvelles anomalies, ni rouvrir la demande. Il reste fermé et les nouvelles demandes doivent faire l'objet d'un nouveau ticket afin que le ticket ne traite que d'un sujet unique.

Vous pourrez toutefois demander un court complément de réponse en commentaire, et ce sans rouvrir le ticket.

<div class="row" data-equalizer data-equalize-on="medium"><div class="column medium-6">{{#> panel heading='Pages connexes'}}

- [Comment remplir un ticket Jira]({{page space='connect' page='comment-remplir-un-ticket-jira'}})
- [Suivi des tickets client]({{page space='connect' page='suivi-des-tickets-client'}})
- [Gérer vos tickets de support]({{page space='connect' page='gandeacuterer-vos-tickets-de-support'}})

{{/panel}}</div><div class="column medium-6">

&nbsp;

</div></div>
