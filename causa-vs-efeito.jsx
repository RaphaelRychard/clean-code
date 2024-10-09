function Button () {
  /* errado: 
    {isFormSubmitting ? 'Carregando...' : 'enviar'}
  */

  // Sempre deve ser criado a variável pela causa e nunca pelo pelo efeito
  const isFormSubmitting = true

  return (
    <button disabled={isFormSubmitting}>
      <span></span>
      {isFormSubmitting ? 'Carregando...' : 'enviar'}
    </button>
  )
}