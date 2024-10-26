import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';

const AlertHelper = {
  async showResponse(message) {
    Swal.fire({
      text: message,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      background: '#F0A500',
      color: '#ffffff',
      backdrop: false,
    });
  },

  async showReviewForm() {
    const result = await Swal.fire({
      title: 'Add Review',
      html:
        '<input id="name-review" class="name-review" placeholder="Name">'
        + '<textarea id="body-review" class="body-review" placeholder="Review"></textarea>',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Send',
      cancelButtonText: 'Cancel',
      didOpen: () => {
        document.getElementById('name-review').focus();
      },
      preConfirm: () => {
        const name = document.getElementById('name-review').value;
        const review = document.getElementById('body-review').value;

        if (!name || !review) {
          Swal.showValidationMessage('Please fill in your name and review!');
          return false;
        }

        return { name: name, review: review };
      },
    });

    return result;
  },
};

export default AlertHelper;
