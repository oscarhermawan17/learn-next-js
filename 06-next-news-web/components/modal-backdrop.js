"use client"

import { useRouter } from "next/navigation"

export default function ModalBackDrop() {
  const router = useRouter() // client function, we need use client

  return <div className="modal-backdrop" onClick={router.back} />
}
