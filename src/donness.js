import { create } from 'zustand'

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
        paysDepart: "",
        villeArrivee: "",
        photo: null,
        poids: 1,
        titre: "",
        description: "",
        prixAchats: "",
        devise: "€",
        besoinAcheteur: false,
        besoinVoyageur: false,
    },
    setCreationAnnonce: (newAnnonce) => set({ CreationAnnonce: newAnnonce }),
    updateTest: (newTest) => set({ test: newTest })
}));