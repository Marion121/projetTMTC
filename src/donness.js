import { create } from 'zustand'
import { français } from './langues/français'

export const useAppStore = create((set) => ({
    isConnecte: false,
    setIsConnecte: (newIsConnecte) => set({ isConnecte: newIsConnecte }),
    User: {
        Email: "",
        Nom: "",
        Prenom: "",
        DateNaissance: "",
        Ville: "",
        Pays: "",
        CoordonnéesBancaires: "1234 1234 1234 1234",
        photo: "",
        adresse: "",
        telephone: "",
        ci: "",
    },
    setUser: (newUser) => set({ User: newUser }),
    CreationAnnonce: {
        paysDepart: {id : 1, nom : "Afghanistan"},
        paysArriver: {id : 1, nom : "Afghanistan"},
        villeArrivee: "",
        photo: null,
        poids: 1,
        titre: "",
        description: "",
        prixAchats: "",
        devise: "€",
        degreImportance: "Normal",
        besoinAcheteur: true,
        besoinVoyageur: true,
        avancement: français.MES_ANNONCES.attenteVoyageurAcheteur,

    },
    setCreationAnnonce: (newAnnonce) => set({ CreationAnnonce: newAnnonce }),
    updateTest: (newTest) => set({ test: newTest })
}));