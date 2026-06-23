@startuml
left to right direction

actor "Utilisateur" as User

rectangle "nAPPing" {

    usecase "Choisir une durée\nde sieste" as UC1
    usecase "Lancer une sieste" as UC2
    usecase "Afficher le temps\nrestant" as UC3
    usecase "Arrêter la sieste\navant la fin" as UC4
    usecase "Choisir l'alarme\nde réveil" as UC5
    usecase "Gérer le compte\nà rebours" as UC6
}

User --> UC1
User --> UC2
User --> UC4

UC2 --> UC6 : <<include>>
UC6 --> UC3 : <<include>>
UC6 --> UC5 : <<include>>

@enduml
