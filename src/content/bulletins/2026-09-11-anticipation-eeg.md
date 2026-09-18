---
title: "Anticiper un stimulus avant qu'il apparaisse"
description: "Une étude EEG montre qu'une attente visuelle ou auditive peut être décodée essai par essai. Son apport aux futurs protocoles de présentiment est méthodologique, non probatoire."
publishedAt: 2026-09-11
status: "Article évalué par les pairs, données associées en accès ouvert"
reading: "Essentielle pour la méthode EEG, sélective pour la recherche psi"
authors: "Isabelle Hoxha, Sylvain Chevallier, Arnaud Delorme et Michel-Ange Amorim"
publication: "Neuropsychologia, 229, 109486"
doi: "https://doi.org/10.1016/j.neuropsychologia.2026.109486"
tags: ["EEG", "anticipation", "présentiment", "apprentissage automatique", "science ouverte"]
draft: false
---

## En bref

L'article de Hoxha et ses collègues montre que l'activité cérébrale précédant un stimulus peut contenir une signature de la modalité attendue, visuelle ou auditive, jusque dans des essais individuels. Ce résultat relève des neurosciences de la prédiction et ne constitue pas une preuve de précognition. Il fournit toutefois une méthode utile pour concevoir des tests psi plus précis et plus difficiles à contaminer par des choix analytiques après coup.

> **Référence**  
> Hoxha, I., Chevallier, S., Delorme, A., et Amorim, M.-A. (2026). « Modality-specific predictive templates in pre-stimulus EEG activity ». *Neuropsychologia*, 229, 109486. [Article et DOI](https://doi.org/10.1016/j.neuropsychologia.2026.109486). Données : [Zenodo](https://doi.org/10.5281/zenodo.19595833). Version auteur : [HAL](https://universite-paris-saclay.hal.science/hal-05636990v1).

## Le protocole

Quarante-deux participants devaient identifier des stimuli visuels ou auditifs. Une partie des essais était précédée d'un indice annonçant correctement la modalité dans 80 % des cas. D'autres essais ne comportaient aucun indice. Les chercheurs ont enregistré l'EEG précédant l'apparition du stimulus afin de déterminer si l'état cérébral permettait de distinguer l'attente d'une image de celle d'un son.

L'analyse porte sur des configurations distribuées de l'activité cérébrale. Elle ne se limite donc pas à comparer une moyenne sur une électrode ou une bande de fréquence. Un classificateur tente de reconnaître la modalité attendue à partir de la configuration pré-stimulus, avec une validation croisée et un niveau de hasard empirique calculé pour chaque participant.

La sélection de la bande fréquentielle est effectuée dans les données d'entraînement parmi plusieurs bandes candidates. La meilleure performance est obtenue dans la bande thêta, entre 4 et 8 Hz, sur les 400 millisecondes précédant le stimulus.

## Le résultat principal

Dans les essais indicés, le classificateur atteint une exactitude moyenne de **66 %**, contre 50 % pour une classification équilibrée. **Trente et un participants sur 42** dépassent leur niveau de hasard empirique, calculé par 1 000 permutations individuelles.

Ces valeurs corrigent une notice antérieure qui mentionnait 26 participants sur 42. Le nombre 26 correspondait à une lecture erronée de la version de travail. L'article final et la version auteur déposée sur HAL indiquent bien 31 sur 42.

Le résultat le plus original concerne les essais sans indice explicite. Les auteurs appliquent aux essais non indicés les classificateurs entraînés sur les essais indicés, puis examinent si les catégories décodées sont liées à la vitesse et à l'exactitude de la réponse. Cette analyse suggère que les attentes endogènes laissent une trace mesurable avant le stimulus, même lorsqu'aucune consigne ne les rend directement observables.

## Pourquoi cette étude intéresse la recherche psi

Les études de présentiment comparent souvent des moyennes physiologiques enregistrées avant différentes catégories de cibles. La méthode de Hoxha et ses collègues ouvre une autre voie : caractériser un état anticipatoire essai par essai, puis tester si cet état correspond à une cible sélectionnée ultérieurement.

L'intérêt est instrumental, pas probatoire. Dans l'expérience publiée, les attentes sont produites par le participant dans un cadre ordinaire de prédiction perceptive. L'étude n'établit pas qu'une information future est disponible avant sa génération. Elle montre qu'une attente peut être décodée, ce qui aide à définir plus précisément la variable que devrait mesurer une expérience psi.

## Points forts

- Une séparation explicite entre anticipation guidée par un indice et anticipation spontanée.
- Une analyse multivariée au niveau de l'essai individuel.
- Une séparation entre données d'entraînement et données de test.
- Une validation croisée assortie d'un hasard empirique propre à chaque participant.
- Un lien recherché entre classification EEG, temps de réponse et exactitude comportementale.
- Des données associées mises à disposition pour vérification et réanalyse.

## Limites

L'attente réelle n'est pas observable dans les essais sans indice. Les auteurs doivent donc l'inférer à partir d'indices indirects. Une partie de la procédure s'appuie sur l'activité post-stimulus pour construire les catégories utilisées dans l'interprétation des états pré-stimulus. Cette stratégie peut modéliser un état latent, sans démontrer que le cerveau disposait d'une information sur la cible future.

Les performances sont hétérogènes entre participants. La combinaison d'analyses individuelles renseigne sur la présence globale d'une information décodable, sans établir directement la capacité du modèle à généraliser à de nouvelles personnes.

Enfin, toute application au psi devrait éviter une confusion centrale : détecter ce que le participant attend n'est pas équivalent à prédire ce qu'un générateur aléatoire choisira ensuite.

## À quoi ressemblerait un test psi convaincant ?

1. Générer la cible seulement après la fin de la fenêtre EEG pré-stimulus.
2. Empêcher toute fuite temporelle ou logicielle entre la sélection de la cible et les données antérieures.
3. Pré-enregistrer le prétraitement, les électrodes, la bande fréquentielle, le classificateur et le critère principal.
4. Conserver un jeu de données indépendant pour la validation finale.
5. Utiliser un modèle statistique qui respecte les essais imbriqués dans les participants et les variations interindividuelles.
6. Publier le code, les exclusions, le protocole et les données nécessaires à un audit complet.

## Conclusion

Cette publication ne déplace pas l'état des preuves concernant le psi. Elle améliore l'instrumentation disponible. L'EEG pré-stimulus peut être traité comme une configuration individuelle et décodable, au lieu d'être réduit à une moyenne de groupe. Cette avancée rend possibles des tests plus fins du présentiment, à condition que la cible future soit réellement indéterminée au moment de la mesure et que l'ensemble de la chaîne analytique soit verrouillé avant la collecte.
